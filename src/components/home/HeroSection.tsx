import { useState } from 'react';
import { Rocket } from 'lucide-react';
import LiveStats from './LiveStats';

interface HeroSectionProps {
  checkMethod: 'phone' | 'vk';
  setCheckMethod: (method: 'phone' | 'vk') => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  isValid: boolean | null;
  handleSubmit: (e: React.FormEvent) => void;
}

const HeroSection = ({ 
  checkMethod, 
  setCheckMethod, 
  inputValue, 
  setInputValue, 
  isValid, 
  handleSubmit 
}: HeroSectionProps) => {
  const placeholder = checkMethod === 'phone' ? '+7 XXX XXX-XX-XX' : 'vk.com/username';

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-red-100 to-[#DC143C] bg-clip-text text-transparent neon-glow">
                ПРОВЕРКА НА ВЕРНОСТЬ
              </span>
              <br />
              <span className="text-white">ЗА 5 МИНУТ</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Узнайте правду о своей второй половинке через соцсети и мессенджеры. 
              <span className="text-[#DC143C] font-semibold"> Полная анонимность</span> и 
              <span className="text-[#DC143C] font-semibold"> гарантированный результат</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-2xl">
                <label className="block text-white text-lg md:text-xl font-semibold mb-6">
                  Начать проверку по:
                </label>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setCheckMethod('phone')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      checkMethod === 'phone'
                        ? 'border-[#DC143C] bg-[#DC143C]/10 text-white'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    <span className="text-2xl mr-2">📱</span>
                    <span className="font-medium">По номеру телефона</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setCheckMethod('vk')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      checkMethod === 'vk'
                        ? 'border-[#DC143C] bg-[#DC143C]/10 text-white'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    <span className="text-2xl mr-2">💬</span>
                    <span className="font-medium">По профилю ВКонтакте</span>
                  </button>
                </div>

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={placeholder}
                  className={`w-full px-6 py-4 bg-black text-white rounded-lg border-2 transition-all text-lg ${
                    isValid === null
                      ? 'border-gray-700 focus:border-[#0080FF]'
                      : isValid
                      ? 'border-green-500 shadow-[0_0_15px_rgba(0,255,0,0.5)]'
                      : 'border-red-500 cursor-not-allowed'
                  } focus:outline-none mb-6`}
                />

                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-full py-5 text-xl font-bold rounded-lg transition-all flex items-center justify-center gap-3 ${
                    isValid
                      ? 'bg-[#DC143C] text-white hover:bg-[#B91028] pulse-animation shadow-[0_0_30px_rgba(220,20,60,0.6)]'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Rocket className="w-6 h-6" />
                  НАЧАТЬ ПРОВЕРКУ
                </button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-500 text-xl">✅</span>
                  <span><span className="text-[#DC143C] font-bold">3000+</span> успешных проверок</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-yellow-500 text-xl">⚡</span>
                  <span><span className="text-[#DC143C] font-bold">5 минут</span> — среднее время результата</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-blue-500 text-xl">🔒</span>
                  <span><span className="text-[#DC143C] font-bold">100%</span> конфиденциальности</span>
                </div>
              </div>
            </form>
          </div>

          <div className="hidden lg:block">
            <LiveStats />
          </div>
        </div>

        <div className="lg:hidden mt-12">
          <LiveStats />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
