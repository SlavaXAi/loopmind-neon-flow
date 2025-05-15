
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const textContent = textRef.current;

    if (section && textContent) {
      gsap.fromTo(textContent, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse"
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-[100dvh] flex flex-col items-center pt-20 bg-[#0E0E10] overflow-hidden">
      <video 
        ref={videoRef} 
        src="https://cdn.jsdelivr.net/gh/Desatyy/loopmind-assets@main/public/hero.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="auto" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        style={{
          pointerEvents: "none"
        }}
      />

      <div ref={textRef} className="relative z-10 max-w-[min(88%,640px)] px-6 sm:px-12 mb-10 sm:mb-0 flex flex-col items-start">
        <motion.h1 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.6,
            delay: 0.2
          }} 
          className="text-h1 text-white text-left leading-tight font-bold"
        >
          Подбор недвижимости<br />в 2 клика
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lead font-medium gradient-text animate-gradient-x" 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.6,
            delay: 0.4
          }}
        >
          ИИ-агент выдаёт идеальные объекты прямо во время<br className="hidden sm:block" /> 
          разговора — за 7 секунд.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-start" 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.6,
            delay: 0.6
          }}
        >
          <motion.button 
            className="btn-primary" 
            whileHover={{
              scale: 1.05
            }} 
            whileTap={{
              scale: 0.98
            }}
          >
            <Zap className="h-5 w-5" />
            <span>Получить демо</span>
          </motion.button>
          
          <motion.button 
            whileHover={{
              scale: 1.05
            }} 
            whileTap={{
              scale: 0.98
            }} 
            className="btn-secondary my-0"
          >
            <span>Получить консультацию</span>
          </motion.button>
        </motion.div>
      </div>

      {/* UI mockup image moved further down with increased margin-top */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mt-24 mb-12 max-w-[min(90%,420px)] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_0_60px_-15px_rgb(0,0,0,0.6)] group"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/Desatyy/loopmind-assets@main/public/mockup-desktop.png"
          srcSet="https://cdn.jsdelivr.net/gh/Desatyy/loopmind-assets@main/public/mockup-desktop.png 1x, https://cdn.jsdelivr.net/gh/Desatyy/loopmind-assets@main/public/mockup-desktop.png 2x"
          alt="Интерфейс LoopMind"
          className="w-full h-full object-cover"
          loading="lazy"
          sizes="(max-width: 640px) 90vw, 50vw"
        />

        {/* Light glow on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-[#6B5CFF]/15 to-[#00E0FF]/15" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
