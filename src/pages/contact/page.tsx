
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20 min-h-screen flex">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[45%] bg-[#2D2D2D] flex flex-col justify-center px-20 py-32"
        >
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
            Let&apos;s Create
            <br />
            Together
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            I&apos;m always interested in hearing about new projects, creative
            collaborations, or opportunities to contribute to meaningful work.
            Feel free to reach out—I'd love to connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-[55%] bg-[#FFF5F7] flex items-center justify-center px-20"
        >
          <div className="flex gap-24 w-full max-w-2xl justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <i className="ri-mail-line text-[#0A0A0A] text-4xl"></i>
              </div>
              <h3 className="text-[#0A0A0A] font-semibold mb-3 text-lg">
                Email
              </h3>
              <a
                href="mailto:zhengyuxin@cuc.edu.cn"
                className="text-[#2D2D2D] text-base hover:text-[#E8B4B8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                zhengyuxin@cuc.edu.cn
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <i className="ri-phone-line text-[#0A0A0A] text-4xl"></i>
              </div>
              <h3 className="text-[#0A0A0A] font-semibold mb-3 text-lg">
                Phone
              </h3>
              <a
                href="tel:+8618515661303"
                className="text-[#2D2D2D] text-base hover:text-[#E8B4B8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                +86 185 1566 1303
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
