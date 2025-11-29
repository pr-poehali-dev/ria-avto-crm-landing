import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: 'Спасибо огромное! Даже не знаю, как бы я узнала правду без вас. Все оказалось именно так, как я и подозревала. Теперь хотя бы знаю, с кем имею дело.',
      author: 'Анна, 28 лет',
    },
    {
      text: 'Долго сомневался, но решился. Результат пришел быстро, все четко и понятно расписано. Жаль, что правда оказалась не в мою пользу, но лучше знать, чем жить в неведении.',
      author: 'Дмитрий, 35 лет',
    },
    {
      text: 'Отличный сервис! Проверка заняла буквально несколько минут. Переживала, что партнер узнает, но все прошло анонимно. Рекомендую всем, кто хочет быть уверенным в своих отношениях.',
      author: 'Екатерина, 31 год',
    },
    {
      text: 'Сначала думал, что это развод, но решил попробовать. Результат меня шокировал - нашли даже удаленные аккаунты на сайтах знакомств. Хорошо, что проверил вовремя.',
      author: 'Алексей, 42 года',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-gradient-to-r from-white to-[#DC143C] bg-clip-text text-transparent">
            Отзывы наших клиентов
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0F0F0F] p-6 rounded-xl border border-gray-800 hover:border-[#DC143C] transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,20,60,0.2)] hover:transform hover:scale-105"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="text-gray-500 text-sm font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
