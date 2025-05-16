
import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Header: React.FC = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-16 flex justify-between items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center">
        <motion.div 
          className="text-3xl font-bold bg-gradient-to-r from-[#6B5CFF] via-[#8F8BFF] to-[#00E0FF] bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          LOOPMIND.PRO
        </motion.div>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <motion.button 
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6B5CFF] to-[#00E0FF] font-bold text-white flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Zap className="h-5 w-5" />
          <span>Получить демо</span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
