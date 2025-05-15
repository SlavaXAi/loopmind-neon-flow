
import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Search, Zap, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="card-feature"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="bg-gradient-to-r from-[#6B5CFF] to-[#00E0FF] p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (section && video) {
      gsap.fromTo(
        video,
        { 
          scale: 0.9,
          opacity: 0
        },
        { 
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: video,
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
    <section ref={sectionRef} id="how-it-works" className="py-20 md:py-32 relative overflow-hidden bg-[#0d0d0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text animate-gradient-x"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Как это работает
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MessageCircle className="h-6 w-6 text-white" />}
            title="Разговор с клиентом"
            description="ИИ-агент общается с клиентом, выявляя его предпочтения и требования к недвижимости."
            delay={0.2}
          />
          
          <FeatureCard 
            icon={<Search className="h-6 w-6 text-white" />}
            title="Мгновенный поиск"
            description="Система в реальном времени анализирует базу объектов и находит идеальные совпадения."
            delay={0.4}
          />
          
          <FeatureCard 
            icon={<Zap className="h-6 w-6 text-white" />}
            title="Мгновенный результат"
            description="Клиент получает подходящие варианты за 7 секунд — прямо во время беседы."
            delay={0.6}
          />
        </div>
        
        {/* Add the mockup image below feature cards */}
        <motion.div 
          className="mt-16 mb-20 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="/lovable-uploads/0bf66f0a-8f1c-47fb-9429-db2f1ab91e09.png" 
            alt="Мобильные экраны приложения Loopmind AI" 
            className="max-w-full lg:max-w-4xl mx-auto shadow-2xl rounded-xl"
          />
        </motion.div>

        <div className="mt-20 flex justify-center">
          <div className="relative overflow-hidden rounded-xl w-full max-w-3xl">
            <video
              ref={videoRef}
              src="https://cdn.jsdelivr.net/gh/Desatyy/loopmind-assets@main/public/clock.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <motion.div 
          className="mt-20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8 p-8 card-feature"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">Дорожная карта внедрения</h3>
            <p className="text-gray-300 mt-4">Подключение системы занимает всего 3 дня — от подписания договора до запуска.</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#6B5CFF] to-[#00E0FF] flex items-center justify-center">
                1
              </div>
              <div className="h-1 w-12 bg-gradient-to-r from-[#6B5CFF] to-[#00E0FF]"></div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#6B5CFF] to-[#00E0FF] flex items-center justify-center">
                2
              </div>
              <div className="h-1 w-12 bg-gradient-to-r from-[#6B5CFF] to-[#00E0FF]"></div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#6B5CFF] to-[#00E0FF] flex items-center justify-center">
                3
              </div>
              <ArrowRight className="h-6 w-6 text-[#00E0FF] ml-2" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
