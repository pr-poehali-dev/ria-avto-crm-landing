import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-6 text-[#0080FF]" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-[#0080FF] bg-clip-text text-transparent">
                Политика конфиденциальности
              </span>
            </h1>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-800 space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Общие положения</h2>
              <p className="leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о пользователях 
                сервиса «Верность-Про» (далее — Сервис).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Собираемая информация</h2>
              <p className="leading-relaxed mb-4">
                Для предоставления услуг мы собираем следующую информацию:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Номер телефона или ссылка на профиль ВКонтакте проверяемого лица</li>
                <li>Техническая информация о вашем устройстве и браузере</li>
                <li>IP-адрес и данные о времени использования сервиса</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Использование информации</h2>
              <p className="leading-relaxed mb-4">
                Собранная информация используется исключительно для:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Выполнения запрошенной проверки на верность</li>
                <li>Формирования и отправки отчета с результатами</li>
                <li>Обеспечения технической поддержки пользователей</li>
                <li>Улучшения качества предоставляемых услуг</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Защита данных</h2>
              <p className="leading-relaxed">
                Мы применяем современные методы шифрования и защиты данных. Вся информация передается по защищенным 
                каналам связи. После получения вами отчета с результатами проверки, все данные полностью удаляются 
                с наших серверов.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Анонимность</h2>
              <p className="leading-relaxed">
                Мы гарантируем полную анонимность проверки. Проверяемое лицо не получает никаких уведомлений о проведении 
                анализа. Ваши личные данные не передаются третьим лицам и не используются для каких-либо других целей.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
              <p className="leading-relaxed">
                Сервис использует технологию cookies для улучшения работы сайта и анализа статистики посещений. 
                Вы можете отключить cookies в настройках вашего браузера, однако это может повлиять на работу некоторых 
                функций сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Изменения в политике</h2>
              <p className="leading-relaxed">
                Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия 
                всегда доступна на данной странице. Продолжая использовать Сервис после внесения изменений, вы соглашаетесь 
                с обновленной Политикой.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Контакты</h2>
              <p className="leading-relaxed">
                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
              </p>
              <ul className="list-none space-y-2 ml-4 mt-4">
                <li>Email: info@vernostpro.ru</li>
                <li>Telegram: <a href="https://t.me/VernostOnlineSupportBot" className="text-[#0080FF] hover:underline">@VernostOnlineSupportBot</a></li>
              </ul>
            </section>

            <section className="border-t border-gray-700 pt-8">
              <p className="text-sm text-gray-500 text-center">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
