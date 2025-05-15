
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0f] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-[#6B5CFF] via-[#8F8BFF] to-[#00E0FF] bg-clip-text text-transparent mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            LOOPMIND.PRO
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row items-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span>&copy; 2025 LOOPMIND.PRO — ИИ-агентство нового поколения</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
