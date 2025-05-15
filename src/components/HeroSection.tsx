
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-[#0E0E10]">
      {/* фоновая анимация */}
      <video
        src="https://cdn.jsdelivr.net/gh/Desatyy/loopmind-assets@main/public/assets/hero.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* вертикальный неоновый луч */}
      <div className="absolute inset-y-0 left-1/2 w-[2px] bg-gradient-to-b
                      from-[#6B5CFF] via-[#8F8BFF] to-[#00E0FF]
                      animate-pulse z-10" />

      {/* основной контент */}
      <div className="relative z-20 max-w-[640px] ml-16 mt-24 text-white">
        <h1 className="text-[clamp(40px,5.3vw,64px)] font-bold leading-tight">
          Подбор&nbsp;недвижимости<br />в&nbsp;2&nbsp;клика
        </h1>
        <p className="mt-4 text-lg/relaxed opacity-80">
          ИИ-агент выдаёт идеальные объекты прямо во время разговора — за 7 секунд.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="px-8 py-4 rounded-full text-black font-bold
                             bg-gradient-to-r from-[#6B5CFF] to-[#00E0FF]
                             hover:scale-105 transition">
            ⚡ Получить демо
          </button>
          <button className="px-8 py-4 rounded-full border border-[#00E0FF]
                             text-white hover:bg-white/10 transition">
            Получить консультацию
          </button>
        </div>
      </div>

      {/* demo-скрин — ровно в чёрную рамку */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute bottom-[6.2%] left-1/2 -translate-x-[35%]
                   w-[52%] aspect-[16/9] overflow-hidden rounded-2xl
                   ring-1 ring-white/10 shadow-[0_0_60px_-15px_rgba(0,0,0,0.6)]
                   group"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/Desatyy/loopmind-assets@main/public/mockup-desktop.png"
          alt="Интерфейс LoopMind"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 opacity-0
                        group-hover:opacity-100 transition duration-300
                        bg-gradient-to-tr from-[#6B5CFF]/15 to-[#00E0FF]/15" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
