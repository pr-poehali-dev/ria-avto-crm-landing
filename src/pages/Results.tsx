import { useNavigate } from 'react-router-dom';
import { PartyPopper, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Results = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-black">
      <Header showButtons={false} />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 fade-in">
            <PartyPopper className="w-20 h-20 mx-auto mb-6 text-[#DC143C]" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-[#DC143C] bg-clip-text text-transparent neon-glow">
                🎉 ПРОВЕРКА ЗАВЕРШЕНА!
              </span>
              <br />
              <span className="text-white">ОТЧЕТ ГОТОВ!</span>
            </h1>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-[#DC143C]/30 shadow-2xl mb-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Отчёт с результатами проверки сформирован и готов к отправке!
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                В готовом отчёте содержится подробная информация о <span className="text-[#DC143C] font-semibold">цифровой жизни</span> вашей второй половинки, а именно ответы на важные вопросы...
              </p>

              <div className="space-y-4 text-gray-300 mb-8">
                <div className="flex gap-3">
                  <span className="text-[#DC143C] flex-shrink-0">•</span>
                  <p>Информация о <span className="text-white font-medium">цифровой активности</span> вашей второй половинки с пользователями ВК, WhatsApp и Telegram за последние 2 месяца</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#DC143C] flex-shrink-0">•</span>
                  <p>Информация об активности посещений сообществ ВК, групп и каналов Telegram</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#DC143C] flex-shrink-0">•</span>
                  <p>Отчёт с информацией о всех существующих аккаунтах в соцсетях, включая <span className="text-white font-medium">удалённые профили</span></p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#DC143C] flex-shrink-0">•</span>
                  <p>Информация о <span className="text-white font-medium">скрытых друзьях</span> ВК с расшифровкой их совместной активности</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#DC143C] flex-shrink-0">•</span>
                  <p>Выгрузка информации о геолокации с часто посещаемыми местами за последний месяц</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#DC143C] flex-shrink-0">•</span>
                  <p>История изменений страницы ВКонтакте с момента её создания</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#DC143C] flex-shrink-0">•</span>
                  <p>Информация о том, как записан ваш партнёр в телефонах других людей</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg">
                Узнайте правду о цифровой жизни своей второй половинки прямо сейчас!
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-gray-700 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                <div>
                  <p className="text-gray-400 mb-2">Стоимость:</p>
                  <p className="text-2xl text-gray-500 line-through">2499₽</p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-500 text-lg font-bold mb-2">🔥 СКИДКА 500₽</p>
                  <p className="text-sm text-gray-400">Успейте воспользоваться!</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">ИТОГО:</p>
                  <p className="text-4xl font-bold text-[#DC143C] pulse-animation">1999₽</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handlePayment}
                className="w-full py-6 text-xl font-bold bg-[#DC143C] hover:bg-[#B91028] text-white rounded-lg pulse-animation shadow-[0_0_30px_rgba(220,20,60,0.6)] transition-all"
              >
                <CreditCard className="w-6 h-6 mr-3" />
                💳 ОПЛАТИТЬ ЧЕРЕЗ СБП
              </Button>

              <Button
                disabled
                className="w-full py-6 text-xl font-bold bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed"
              >
                💳 ОПЛАТА КАРТОЙ
              </Button>
              <p className="text-sm text-center text-gray-500">Временно недоступно</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-white font-semibold mb-2">Достоверность данных</h3>
              <p className="text-gray-400 text-sm">Проверенная информация</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-white font-semibold mb-2">100% конфиденциальность</h3>
              <p className="text-gray-400 text-sm">Полная анонимность</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-white font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-400 text-sm">Всегда на связи</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
