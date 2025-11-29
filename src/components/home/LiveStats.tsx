import { useState, useEffect } from 'react';
import { Users, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const LiveStats = () => {
  const [currentChecking, setCurrentChecking] = useState(2);
  const [todayChecks, setTodayChecks] = useState(48);
  const [lastCheckMinutes, setLastCheckMinutes] = useState(3);

  useEffect(() => {
    const checkingInterval = setInterval(() => {
      setCurrentChecking(Math.floor(Math.random() * 5) + 1);
    }, 85000);

    const lastCheckInterval = setInterval(() => {
      setLastCheckMinutes(Math.floor(Math.random() * 15) + 1);
    }, 120000);

    const dailyResetInterval = setInterval(() => {
      const now = new Date();
      const minutes = now.getMinutes();
      if (minutes % 30 === 0) {
        setTodayChecks(Math.floor(Math.random() * 30) + 20);
      }
    }, 60000);

    return () => {
      clearInterval(checkingInterval);
      clearInterval(lastCheckInterval);
      clearInterval(dailyResetInterval);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-2xl border border-[#DC143C]/30 shadow-2xl space-y-6 max-w-md mx-auto lg:max-w-none">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-[#DC143C]" />
        Статистика в реальном времени
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-gray-700">
          <Users className="w-8 h-8 text-[#DC143C]" />
          <div>
            <p className="text-gray-400 text-sm">Сейчас проверяют</p>
            <p className="text-2xl font-bold text-white">{currentChecking} {currentChecking === 1 ? 'человек' : 'человека'}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-gray-700">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-gray-400 text-sm">Проверки сегодня</p>
            <p className="text-2xl font-bold text-white">{todayChecks}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-gray-700">
          <Clock className="w-8 h-8 text-blue-500" />
          <div>
            <p className="text-gray-400 text-sm">Последняя проверка</p>
            <p className="text-2xl font-bold text-white">{lastCheckMinutes} мин назад</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-black/40 rounded-lg border border-gray-700">
          <Clock className="w-8 h-8 text-purple-500" />
          <div>
            <p className="text-gray-400 text-sm">Среднее время проверки</p>
            <p className="text-2xl font-bold text-white">3 минуты</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-[#DC143C]/10 border border-[#DC143C]/30 rounded-lg">
        <p className="text-sm text-gray-300 text-center">
          🔥 <span className="font-bold text-white">Популярность сайта растет!</span> Присоединяйтесь к тысячам пользователей
        </p>
      </div>
    </div>
  );
};

export default LiveStats;
