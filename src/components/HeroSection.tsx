import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
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
  return <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-start pt-20 bg-[#0E0E10] overflow-hidden">
      {/* Background image positioned behind the video */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" alt="Matrix-like background" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/70 to-[#0E0E10]/90"></div>
      </div>
      
      <video ref={videoRef} src="https://cdn.jsdelivr.net/gh/Desatyy/loopmind-assets@main/public/hero.mp4" autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover z-[1]" style={{
      pointerEvents: "none"
    }} />

      {/*  UI-макет в пустой рамке hero.mp4  */}
      <motion.div initial={{
      opacity: 0,
      y: 40
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      amount: 0.5
    }} transition={{
      duration: 0.7,
      ease: "easeOut"
    }} className="absolute bottom-[0%] left-1/2 -translate-x-[80%] w-[39.2%] aspect-[16/9] overflow-hidden ring-1 ring-white/10 shadow-[0_0_60px_-15px_rgb(0,0,0,0.6)] group z-[2] my-0 px-0 mx-0 rounded-md py-0">
        

        {/* лёгкое свечение при hover — опционально */}
        <div className="pointer-events-none absolute inset-0 opacity-0
                      group-hover:opacity-100 transition duration-300
                      bg-gradient-to-tr from-[#6B5CFF]/15 to-[#00E0FF]/15" />
      </motion.div>

      <div ref={textRef} className="relative z-10 max-w-4xl ml-16 md:ml-32 mt-7 md:mt-[4rem] flex flex-col items-start">
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-4xl text-white text-left leading-tight font-bold md:text-4xl">
          Подбор недвижимости<br />в 2 клика
        </motion.h1>
        
        <motion.p className="mt-6 text-xl md:text-2xl font-medium gradient-text animate-gradient-x" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          ИИ-агент выдаёт идеальные объекты прямо во время<br /> 
          разговора — за 7 секунд.
        </motion.p>
        
        <motion.div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-10" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }}>
          <motion.button className="btn-primary" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }}>
            <Zap className="h-5 w-5" />
            <span>Получить демо</span>
          </motion.button>
          
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }} className="btn-secondary my-0">
            <span>Получить консультацию</span>
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;