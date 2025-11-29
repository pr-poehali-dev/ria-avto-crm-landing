import { Heart } from 'lucide-react';

interface HeaderProps {
  showButtons?: boolean;
}

const Header = ({ showButtons = true }: HeaderProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <Heart className="w-8 h-8 text-[#DC143C] fill-[#DC143C]" />
          <div className="flex flex-col items-start">
            <span className="text-lg md:text-xl font-bold">ВЕРНОСТЬ-ПРО</span>
            <span className="text-xs text-gray-400 hidden md:block">Профессиональный Онлайн-сервис</span>
          </div>
        </button>
        
        {showButtons && (
          <div className="flex gap-2">
            <a 
              href="https://vernost-pro-scanner.lovable.app/report-example"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 sm:px-4 md:px-6 py-2 text-xs sm:text-sm md:text-base text-white border border-gray-700 rounded hover:border-[#DC143C] hover:neon-glow transition-all whitespace-nowrap"
            >
              <span className="hidden sm:inline">Примеры проверок</span>
              <span className="sm:hidden">Примеры</span>
            </a>
            <a 
              href="https://t.me/VernostOnlineSupportBot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 sm:px-4 md:px-6 py-2 text-xs sm:text-sm md:text-base text-white border border-gray-700 rounded hover:border-[#0080FF] hover:neon-glow transition-all whitespace-nowrap"
            >
              <span className="hidden sm:inline">Консультация 24/7</span>
              <span className="sm:hidden">24/7</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;