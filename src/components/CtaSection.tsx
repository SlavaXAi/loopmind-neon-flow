
import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      gsap.fromTo(
        section.querySelectorAll('.gsap-reveal'),
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="cta" 
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0E0E10 0%, #14141A 100%)",
      }}
    >
      <div className="absolute inset-0" style={{ 
        background: "radial-gradient(circle at 50% 50%, rgba(107, 92, 255, 0.15), transparent 70%)" 
      }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 gradient-text animate-gradient-x gsap-reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Присоединяйтесь к новой эре PropTech
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10 gsap-reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Подключите ИИ-агента LOOPMIND уже сегодня и начните использовать революционные технологии для увеличения продаж недвижимости.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 gsap-reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="h-5 w-5" />
              <span>Получить демо</span>
            </motion.button>
            
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Оставить заявку на подключение</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
