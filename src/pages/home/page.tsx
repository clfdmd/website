import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import LiquidBackground from '../../components/feature/LiquidBackground';

const HomePage = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: true, amount: 0.3 });
  const section2InView = useInView(section2Ref, { once: true, amount: 0.2 });
  const section3InView = useInView(section3Ref, { once: true, amount: 0.3 });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.8]);

  const skillCategories = [
    {
      title: 'Interactive & Real-Time Systems',
      skills: ['Unity', 'Unreal Engine', 'TouchDesigner', 'Processing'],
    },
    {
      title: 'Physical Computing & Embodied Interaction',
      skills: ['Arduino', 'Sensors'],
    },
    {
      title: 'Live Media & Broadcast Systems',
      skills: ['Broadcast Camera', 'Video System', 'EVS System', 'Audio System', 'Timecode & Synchronization'],
    },
  ];

  return (
    <div ref={containerRef} className="bg-[#0A0A0A]">
      <Navbar />

      {/* Hero Section - Full Screen Interactive */}
      <motion.section
        ref={heroRef}
        className="h-screen relative overflow-hidden flex items-center justify-center"
        style={{ opacity: heroOpacity }}
      >
        {/* 液体背景 */}
        <div className="absolute inset-0" style={{ pointerEvents: 'all' }}>
          <LiquidBackground mouseForce={25} />
        </div>

        {/* 暗色叠加层增强对比度 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        {/* Main Content */}
        <motion.div className="relative z-10 text-center px-8" style={{ scale: heroScale }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-8xl font-bold mb-6 tracking-tight text-white hover:tracking-wide transition-all duration-500 cursor-default"
            style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.5), 0 0 60px rgba(232, 180, 184, 0.3)' }}
          >
            YUXIN ZHENG
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl mb-4 tracking-[0.2em] text-white/95 hover:tracking-[0.3em] transition-all duration-500 cursor-default"
            style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)' }}
          >
            Undergraduate Student at Communication University of China
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed 
              hover:text-[#E8B4B8] transition-colors duration-500 cursor-default"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.4)' }}
          >
            Exploring the intersection of technology and creativity through embodied interaction, immersive media systems, and intelligent broadcasting.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.span
            className="text-white/70 text-sm tracking-widest uppercase"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
            whileHover={{ color: '#E8B4B8', scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            whileHover={{ borderColor: '#E8B4B8', scale: 1.1 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section ref={section1Ref} className="min-h-screen bg-[#FFF5F7] flex items-center py-32">
        <div className="max-w-[1400px] mx-auto px-16 w-full">
          <div className="grid grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={section1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="col-span-5"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#E8B4B8] rounded-[30px]" />
                <img
                  src="https://static.readdy.ai/image/2413583ecb10b63895c6cd538f0c90e1/fe9c8ae07dae11aaee0eaaba2c91cac9.jpeg"
                  alt="Portrait"
                  className="w-full h-auto rounded-[30px] object-contain shadow-2xl relative z-10"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={section1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-7"
            >
              <div className="text-[#E8B4B8] text-sm tracking-[0.3em] uppercase mb-6">About Me</div>
              <div className="text-[#E8B4B8] text-[80px] leading-none mb-6 font-serif">"</div>
              <p className="text-[#2D2D2D] text-xl leading-relaxed mb-6">
                I am an undergraduate student majoring in Digital Media Arts at Communication University of China, with a primary focus on interaction design and interactive media systems.
              </p>
              <p className="text-[#2D2D2D] text-xl leading-relaxed mb-6">
              My academic training emphasizes the integration of design and technology, covering interaction design, game systems, AR/VR, AI applications, user interface design, and user experience design. Through coursework and project-based learning, I have developed both visual sensitivity and technical skills, working across programming, interactive system design, and immersive media development.
              </p>
              <p className="text-[#2D2D2D] text-xl leading-relaxed mb-8">
                Alongside my academic work, I have participated extensively in live broadcasting and television production, gaining hands-on experience in multi-camera workflows, camera operation, live directing, and broadcast system coordination. These practices have further shaped my research interests in intelligent broadcasting, embodied interaction, and AI-assisted support for live media production.
              </p>
              <div className="flex items-center gap-4">
                <span className="w-12 h-[2px] bg-[#E8B4B8]" />
                <p className="text-[#2D2D2D] text-base font-medium">Yuxin Zheng</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={section2Ref} className="py-32 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={section2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#E8B4B8] text-sm tracking-[0.3em] uppercase">Expertise</span>
            <h2 className="text-white text-4xl font-bold mt-4">Skills &amp; Tools</h2>
          </motion.div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={section2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="text-center"
              >
                <h3 className="text-[#E8B4B8] text-lg font-medium mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={section2InView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: '#E8B4B8', color: '#0A0A0A' }}
                      className="px-6 py-3 bg-[#2D2D2D] text-white rounded-full text-base font-medium cursor-pointer transition-all duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore My Work Section - Combined Projects & Broadcasting */}
      <section ref={section3Ref} className="py-32 bg-[#2D2D2D] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#E8B4B8]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#E8B4B8]/10 to-transparent rounded-full blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-16 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={section3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#E8B4B8] text-sm tracking-[0.3em] uppercase">
              Explore
            </span>
            <h2 className="text-white text-4xl font-bold mt-4">Selected Work</h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {/* Projects Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-black/40 backdrop-blur-sm rounded-3xl p-10 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8B4B8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 mb-8 bg-[#E8B4B8]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#E8B4B8]/30 transition-colors duration-300">
                  <i className="ri-palette-line text-4xl text-[#E8B4B8]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">Interactive Design & Digital Experiences</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  Projects in interaction design, game development, AR/VR, and AI applications, emphasizing system logic, user experience, and embodied interaction.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 text-white group-hover:text-[#E8B4B8] transition-colors duration-300"
                >
                  <span className="text-lg font-medium">View Projects</span>
                  <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-[#E8B4B8] group-hover:text-[#0A0A0A] transition-all duration-300">
                    <i className="ri-arrow-right-line text-lg" />
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Broadcasting Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={section3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-black/40 backdrop-blur-sm rounded-3xl p-10 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8B4B8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 mb-8 bg-[#E8B4B8]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#E8B4B8]/30 transition-colors duration-300">
                  <i className="ri-live-line text-4xl text-[#E8B4B8]" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">Broadcast Production & Live Systems</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                Hands-on experience in live production environments, including multi-camera switching, technical system operation, and on-site workflows, with a focus on broadcast safety, system stability, and audiovisual experience.
                </p>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-3 text-white group-hover:text-[#E8B4B8] transition-colors duration-300"
                >
                  <span className="text-lg font-medium">View Experience</span>
                  <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-[#E8B4B8] group-hover:text-[#0A0A0A] transition-all duration-300">
                    <i className="ri-arrow-right-line text-lg" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
