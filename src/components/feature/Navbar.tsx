import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [bounce, setBounce] = useState(false);

  // 保存每个菜单项 DOM
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDarkHeroPage = location.pathname === '/';
  const usesDarkText = scrolled || !isDarkHeroPage;

  // Navbar 滚动判断
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 当点击页面时，如果是 Home，就触发 bounce 动画
  useEffect(() => {
    setBounce(true);
    const timer = setTimeout(() => setBounce(false), 400); // 动画时长
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // 当前横杠目标位置和宽度
  const activeRef = navRefs.current[location.pathname];
  const indicatorStyle = activeRef
    ? { width: activeRef.offsetWidth, left: activeRef.offsetLeft }
    : { width: 0, left: 0 };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : isDarkHeroPage ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-16 py-6 flex items-center justify-between relative">
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 cursor-pointer ${
            usesDarkText ? 'text-[#0A0A0A]' : 'text-white'
          }`}
        >
          ZYX
        </Link>

        <div className="flex items-center gap-12 relative">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              ref={(el) => {
                navRefs.current[item.path] = el;
              }}
              className={`relative text-base font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                usesDarkText ? 'text-[#0A0A0A]' : 'text-white'
              } ${location.pathname === item.path ? 'text-[#E8B4B8]' : ''}`}
            >
              {item.name}
            </Link>
          ))}

          {/* 横杠 */}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-[#E8B4B8]"
            style={{
              width: indicatorStyle.width,
              left: indicatorStyle.left,
            }}
            animate={{
              y: bounce && location.pathname === '/' ? -6 : 0, // Home 点击上浮
            }}
            transition={{
              width: { duration: 0.3, ease: 'easeInOut' },
              left: { duration: 0.3, ease: 'easeInOut' },
              y: { duration: 0.4, ease: 'easeOut' },
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;