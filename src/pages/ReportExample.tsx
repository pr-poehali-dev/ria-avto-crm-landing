import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, MapPin, MessageSquare, Users, Globe } from 'lucide-react';

const ReportExample = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 mx-auto mb-6 text-[#DC143C]" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-[#DC143C] bg-clip-text text-transparent">
                Пример отчета проверки
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Демонстрация структуры и содержания отчета о проверке на верность
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-8 h-8 text-[#DC143C] flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">Цифровая активность</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Детальный анализ взаимодействий с другими пользователями в социальных сетях и мессенджерах за последние 2 месяца.
                  </p>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Найдено: 23 активных контакта</p>
                    <p className="text-gray-400 text-sm">Наибольшая активность: ВКонтакте (47%), WhatsApp (32%), Telegram (21%)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-8 h-8 text-[#0080FF] flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">Геолокация</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Карта перемещений с отображением часто посещаемых мест за последние 30 дней.
                  </p>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Часто посещаемые места: 7 локаций</p>
                    <p className="text-gray-400 text-sm">Необычные маршруты: Обнаружено 3 случая</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <MessageSquare className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">Скрытые друзья ВК</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Список скрытых контактов с анализом совместной активности и частоты взаимодействий.
                  </p>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Обнаружено скрытых друзей: 12</p>
                    <p className="text-gray-400 text-sm">Активное общение: с 4 контактами</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <Globe className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">Аккаунты в сети</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Полный список всех обнаруженных профилей в соцсетях и на сайтах знакомств, включая удаленные.
                  </p>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Активные профили: 5</p>
                    <p className="text-gray-400 text-sm">Удаленные профили: 2 (восстановлена история)</p>
                    <p className="text-gray-400 text-sm">Сайты знакомств: Найдено 1 активный профиль</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#DC143C]/10 to-[#0080FF]/10 p-8 rounded-xl border border-[#DC143C]/30">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Получите полный отчет о вашей второй половинке
            </h3>
            <p className="text-gray-300 text-center mb-6">
              Реальный отчет содержит детальную информацию с конкретными данными, именами, ссылками и временными метками
            </p>
            <div className="text-center">
              <a
                href="/"
                className="inline-block px-8 py-4 bg-[#DC143C] hover:bg-[#B91028] text-white font-bold rounded-lg transition-all"
              >
                Начать проверку
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportExample;
