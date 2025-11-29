import { Mask, Zap, Shield, Lock } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Mask,
      title: 'Анонимность',
      description: 'Никто не узнает о проверке. Полная конфиденциальность вашего запроса и результатов.',
    },
    {
      icon: Zap,
      title: 'Быстрота',
      description: 'Результаты через 5-10 минут. Автоматизированная система анализа данных.',
    },
    {
      icon: Shield,
      title: 'Гарантия',
      description: 'Точность и актуальность данных. Проверенная технология с 98% успешных проверок.',
    },
    {
      icon: Lock,
      title: 'Конфиденциальность',
      description: 'Защита ваших данных. Все результаты удаляются после получения отчета.',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-gradient-to-r from-white to-[#0080FF] bg-clip-text text-transparent">
            Наши преимущества
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 md:p-8 rounded-xl border border-gray-800 hover:border-[#0080FF] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,128,255,0.2)]"
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 mb-4 text-[#0080FF]" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
