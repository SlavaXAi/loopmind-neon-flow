
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 py-4 px-safe px-4 sm:px-8 flex justify-between items-center backdrop-blur-md"
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

        {/* Desktop navigation */}
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

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden flex items-center justify-center"
          aria-label="Открыть меню"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#0E0E10]/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-2xl z-[60] px-safe"
          >
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6" 
              aria-label="Закрыть меню"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              <a href="#about" className="text-white hover:text-[#00E0FF] transition-colors">О продукте</a>
              <a href="#how-it-works" className="text-white hover:text-[#00E0FF] transition-colors">Как работает</a>
              <a href="#advantages" className="text-white hover:text-[#00E0FF] transition-colors">Преимущества</a>
              <a href="#cta" className="text-white hover:text-[#00E0FF] transition-colors">Контакты</a>
            </nav>

            <motion.button 
              className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#6B5CFF] to-[#00E0FF] font-bold text-white flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="h-5 w-5" />
              <span>Получить демо</span>
            </motion.button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
