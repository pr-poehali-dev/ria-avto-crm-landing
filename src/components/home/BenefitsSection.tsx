import { MapPin, MessageSquare, Activity, Mask, Heart, Search } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: MapPin,
      title: 'Проверка по геолокации',
      description: 'Узнайте, где бывает ваша половина',
    },
    {
      icon: MessageSquare,
      title: 'Анализ переписки',
      description: 'С кем общается и кому уделяет внимание',
    },
    {
      icon: Activity,
      title: 'Отслеживание активности',
      description: 'Соцсети и мессенджеры',
    },
    {
      icon: Mask,
      title: 'Поиск скрытых аккаунтов',
      description: 'Обнаружение секретных профилей',
    },
    {
      icon: Heart,
      title: 'Сайты знакомств',
      description: 'Включая удаленные профили',
    },
    {
      icon: Search,
      title: 'Скрытые интересы',
      description: 'Цифровой анализ действий',
    },
  ];

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-gradient-to-r from-white to-[#DC143C] bg-clip-text text-transparent">
            Что вы получите
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <button
                key={index}
                onClick={scrollToForm}
                className="group bg-[#1A1A1A] p-6 md:p-8 rounded-xl border border-gray-800 hover:border-[#DC143C] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] text-left"
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 mb-4 text-[#0080FF] group-hover:text-[#DC143C] transition-colors" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#DC143C] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {benefit.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
