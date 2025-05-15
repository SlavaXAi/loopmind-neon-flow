
import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
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
    <section ref={sectionRef} id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text animate-gradient-x gsap-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Что такое LoopMind?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="card-feature gsap-reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">ИИ-агент для недвижимости</h3>
            <p className="text-gray-300">LOOPMIND — это интеллектуальная система подбора недвижимости, которая анализирует запросы клиентов в реальном времени и мгновенно находит идеальные варианты.</p>
          </motion.div>
          
          <motion.div 
            className="card-feature gsap-reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Технологический прорыв</h3>
            <p className="text-gray-300">Мы объединили нейросети, обработку естественного языка и анализ больших данных для создания революционного инструмента в PropTech индустрии.</p>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center gsap-reveal">
          <div className="relative overflow-hidden rounded-xl w-full max-w-3xl aspect-video">
            <video
              src="https://cdn.jsdelivr.net/gh/Desatyy/loopmind-assets@main/public/wavescircle.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
