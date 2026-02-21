
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-16">
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-md">
            <h3 className="text-3xl font-bold mb-6 font-serif">Yuxin Zheng</h3>
            
            <div className="flex gap-4">
              <a
                href="mailto:zhengyuxin@cuc.edu.cn"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#E8B4B8] hover:border-[#E8B4B8] transition-all duration-300 cursor-pointer"
              >
                <i className="ri-mail-line text-lg"></i>
              </a>

              <a
                href="../../../materials/Yuxin_Zheng_CV.pdf"
                download
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#E8B4B8] hover:border-[#E8B4B8] transition-all duration-300 cursor-pointer font-bold text-sm"
              >
                CV
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <Link
              to="/"
              className="text-white text-lg font-semibold hover:text-[#E8B4B8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-white text-lg font-semibold hover:text-[#E8B4B8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="text-white text-lg font-semibold hover:text-[#E8B4B8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg font-semibold hover:text-[#E8B4B8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-xs text-center">
            {currentYear}  |  Yuxin Zheng  |  Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
