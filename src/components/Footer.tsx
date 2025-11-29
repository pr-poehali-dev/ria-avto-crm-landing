import { Heart, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-[#DC143C] fill-[#DC143C]" />
              <span className="text-xl font-bold">ВЕРНОСТЬ-ПРО</span>
            </div>
            <p className="text-gray-400 text-sm">
              Профессиональный онлайн-сервис проверки на верность через социальные сети и мессенджеры
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:info@vernostpro.ru" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@vernostpro.ru
              </a>
              <a 
                href="https://t.me/VernostOnlineSupportBot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Поддержка 24/7
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Ссылки</h3>
            <div className="space-y-2 text-sm">
              <a 
                href="https://vernost-pro-scanner.lovable.app/report-example"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Примеры проверок
              </a>
              <a 
                href="https://vernost-pro-scanner.lovable.app/privacy"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © 2023-2025 Верность-Про. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
