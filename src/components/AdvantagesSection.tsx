
import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, CheckCircle, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description, delay }) => {
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

const AdvantagesSection: React.FC = () => {
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
    <section ref={sectionRef} id="advantages" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text animate-gradient-x gsap-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Преимущества
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AdvantageCard 
            icon={<Clock className="h-6 w-6 text-white" />}
            title="Экономия времени"
            description="Сокращает время подбора недвижимости с часов до секунд, повышая эффективность работы агентов."
            delay={0.2}
          />
          
          <AdvantageCard 
            icon={<CheckCircle className="h-6 w-6 text-white" />}
            title="Точность подбора"
            description="ИИ находит объекты с учетом более 100 параметров, подбирая идеальные варианты для клиентов."
            delay={0.4}
          />
          
          <AdvantageCard 
            icon={<TrendingUp className="h-6 w-6 text-white" />}
            title="Рост конверсии"
            description="Увеличение конверсии сделок на 37% благодаря мгновенному подбору релевантных объектов."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
