
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 判断当前页面是否有深色背景（首页有深色hero区域）
  const isDarkHeroPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  // 确定文字颜色：滚动后或非深色背景页面使用深色文字
  const usesDarkText = scrolled || !isDarkHeroPage;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : isDarkHeroPage ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-16 py-6 flex items-center justify-between">
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 cursor-pointer ${
            usesDarkText ? 'text-[#0A0A0A]' : 'text-white'
          }`}
        >
          ZYX
        </Link>

        <div className="flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-base font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                usesDarkText ? 'text-[#0A0A0A]' : 'text-white'
              } ${location.pathname === item.path ? 'text-[#E8B4B8]' : ''}`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E8B4B8]"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
