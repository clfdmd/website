
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

const LiquidEtherMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(1, 1),
    uMouse: new THREE.Vector2(0.5, 0.5),
    uMouseVelocity: 0,
    uMouseIntensity: 0,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    precision highp float;
    
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;
    uniform float uMouseVelocity;
    uniform float uMouseIntensity;
    
    varying vec2 vUv;
    
    #define S(a,b,t) smoothstep(a,b,t)
    
    mat2 Rot(float a) {
      float s = sin(a);
      float c = cos(a);
      return mat2(c, -s, s, c);
    }
    
    vec2 hash(vec2 p) {
      p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
      return fract(sin(p) * 43758.5453);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float n = mix(
        mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
      );
      return 0.5 + 0.5 * n;
    }
    
    void main() {
      vec2 uv = vUv;
      float ratio = uResolution.x / uResolution.y;
      
      vec2 tuv = uv;
      tuv -= 0.5;
      
      // Mouse interaction - create ripple/distortion at mouse position
      vec2 mouseUv = uMouse - 0.5;
      mouseUv.x *= ratio;
      vec2 tuvAdjusted = tuv;
      tuvAdjusted.x *= ratio;
      
      float dist = length(tuvAdjusted - mouseUv);
      float mouseEffect = uMouseIntensity * 2.0; // 增强效果强度
      
      // Ripple effect around mouse - 更明显的涟漪
      float ripple = sin(dist * 10.0 - uTime * 2.5)
             * exp(-dist * 6.0)
             * mouseEffect;
      
      // Soft water-like displacement (no direction force)
      float water = exp(-dist * 6.0) * mouseEffect;
      
      tuv += vec2(
        sin(dist * 8.0 - uTime * 3.0),
        cos(dist * 8.0 - uTime * 3.0)
      ) * water * 0.015;
      
      // Rotate with noise (base animation)
      float degree = noise(vec2(uTime * 0.1, tuv.x * tuv.y));
      tuv.y *= 1.0 / ratio;
      tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));
      tuv.y *= ratio;
      
      // Wave warp (base animation)
      float frequency = 5.0;
      float amplitude = 30.0;
      float speed = uTime * 2.0;
      
      tuv.x += sin(tuv.y * frequency + speed) / amplitude;
      tuv.y += sin(tuv.x * frequency * 1.5 + speed) / (amplitude * 0.5);
      

      
      // Draw the image - using warm pink/rose tones
      vec3 colorDeep = vec3(0.1, 0.05, 0.08);      // Deep dark rose
      vec3 colorMid = vec3(0.91, 0.71, 0.74);      // #E8B4BC - Rose pink
      vec3 colorLight = vec3(0.96, 0.82, 0.83);    // #F5D0D3 - Light pink
      vec3 colorAccent = vec3(0.18, 0.18, 0.18);   // Dark gray
      
      vec3 layer1 = mix(colorDeep, colorMid, S(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x));
      vec3 layer2 = mix(colorAccent, colorLight, S(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x));
      
      vec3 finalComp = mix(layer1, layer2, S(0.5, -0.3, tuv.y));
      
      // Mouse glow effect - 更明显的光晕
      float glow = exp(-dist * 6.0) * mouseEffect * 0.15;
      finalComp += vec3(0.96, 0.85, 0.86) * glow;
      
      // Add some noise texture
      float n = noise(uv * 800.0);
      finalComp = mix(finalComp, finalComp * 0.95, n * 0.08);
      
      gl_FragColor = vec4(finalComp, 1.0);
    }
  `
);

extend({ LiquidEtherMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      liquidEtherMaterial: any;
    }
  }
}

function LiquidMesh() {
  const materialRef = useRef<any>(null);
  const { size } = useThree();
  const mousePos = useRef(new THREE.Vector2(0.5, 0.5));
  const prevMousePos = useRef(new THREE.Vector2(0.5, 0.5));
  const mouseVelocity = useRef(0);
  const mouseIntensity = useRef(0);

  const rawMouse = useRef(new THREE.Vector2(0.5, 0.5));

  useMemo(() => {
    const onMove = (e: MouseEvent) => {
      rawMouse.current.x = e.clientX / window.innerWidth;
      rawMouse.current.y = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
      materialRef.current.uResolution.set(size.width, size.height);
      
      // Calculate target mouse position
      const targetX = rawMouse.current.x;
      const targetY = rawMouse.current.y;
      
      // Calculate mouse velocity
      const dx = targetX - prevMousePos.current.x;
      const dy = targetY - prevMousePos.current.y;
      const velocity = Math.sqrt(dx * dx + dy * dy);
      
      // Smooth velocity - 更快的响应
      mouseVelocity.current += (velocity - mouseVelocity.current) * 0.2;
      
      // Update intensity based on velocity - 更高的基础强度
      const targetIntensity = Math.min(mouseVelocity.current * 80, 1.0);
      mouseIntensity.current += (targetIntensity - mouseIntensity.current) * 0.15;
      
      // Decay intensity slowly when mouse is still
      if (velocity < 0.001) {
        mouseIntensity.current *= 0.95;
      }
      
      // Smooth mouse following - 更快的跟随
      mousePos.current.x += (targetX - mousePos.current.x) * 0.15;
      mousePos.current.y += (targetY - mousePos.current.y) * 0.15;
      
      // Update previous position
      prevMousePos.current.x = targetX;
      prevMousePos.current.y = targetY;
      
      // Update uniforms
      materialRef.current.uMouse.set(mousePos.current.x, mousePos.current.y);
      materialRef.current.uMouseVelocity = mouseVelocity.current;
      materialRef.current.uMouseIntensity = mouseIntensity.current;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[3, 3]} />
      <liquidEtherMaterial ref={materialRef} />
    </mesh>
  );
}

export default function LiquidBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ width: '100%', height: '100%', display: 'block' }}
        gl={{ antialias: true, alpha: true }}
      >
        <LiquidMesh />
      </Canvas>
    </div>
  );
}
