import { useEffect } from 'react';
import { PartyPopper, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Success = () => {
  useEffect(() => {
    const confettiCount = 50;
    const confettiColors = ['#DC143C', '#0080FF', '#FFD700', '#FF69B4', '#00FF00'];
    
    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.opacity = '0.8';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${3 + Math.random() * 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
      }, i * 50);
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header showButtons={false} />
      
      <main className="pt-32 pb-16 px-4 min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center fade-in">
            <div className="mb-8 relative">
              <PartyPopper className="w-24 h-24 mx-auto text-[#DC143C] animate-bounce" />
              <div className="absolute inset-0 blur-3xl bg-[#DC143C]/30 animate-pulse"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FFD700] via-white to-[#DC143C] bg-clip-text text-transparent neon-glow">
                🎊 ВАШ ОТЧЕТ ГОТОВ!
              </span>
            </h1>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border-2 border-[#DC143C]/50 shadow-[0_0_50px_rgba(220,20,60,0.3)] mb-8">
              <div className="mb-8">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-500 mb-2">
                    ✅ ПЛАТЕЖ УСПЕШНО ПОДТВЕРЖДЕН!
                  </h2>
                  <div className="text-gray-400 space-y-1">
                    <p>Транзакция: TXN-8A9F2C1D</p>
                    <p>Сумма: 1999.00 RUB</p>
                    <p>Дата: {new Date().toLocaleDateString('ru-RU')}</p>
                  </div>
                </div>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Для получения отчета перейдите по ссылке:
                </p>

                <a
                  href="https://t.me/VernostProffiBot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full py-8 text-2xl font-bold bg-gradient-to-r from-[#00C853] to-[#00E676] hover:from-[#00B248] hover:to-[#00D16B] text-white rounded-xl shadow-[0_0_40px_rgba(0,200,83,0.6)] transition-all transform hover:scale-105"
                  >
                    <Send className="w-8 h-8 mr-4" />
                    📩 ПОЛУЧИТЬ ОТЧЕТ
                  </Button>
                </a>
              </div>

              <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded">
                <p className="text-yellow-200 font-semibold mb-2">⚠️ Обратите внимание:</p>
                <p className="text-gray-300 leading-relaxed">
                  Повторная подача заявки не требуется. Отчет уже сформирован. 
                  В целях конфиденциальности мы удаляем отчет сразу после получения. 
                  Повторная отправка будет недоступна.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-white font-semibold mb-2">Конфиденциальность</h3>
                <p className="text-gray-400 text-sm">Данные удаляются после получения</p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-white font-semibold mb-2">Мгновенный доступ</h3>
                <p className="text-gray-400 text-sm">Отчет доступен прямо сейчас</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default Success;
