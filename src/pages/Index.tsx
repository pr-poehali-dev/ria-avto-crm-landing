import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import NotificationToast from '@/components/home/NotificationToast';

const Index = () => {
  const navigate = useNavigate();
  const [checkMethod, setCheckMethod] = useState<'phone' | 'vk'>('phone');
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    document.title = 'Верность-Про — Проверка на верность онлайн за 5 минут';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональная проверка на верность через соцсети и мессенджеры. Анонимно, быстро, надежно. Результат за 5 минут.');
    }
  }, []);

  useEffect(() => {
    if (!inputValue) {
      setIsValid(null);
      return;
    }

    if (checkMethod === 'phone') {
      const phoneRegex = /^\+7\s?\d{3}\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
      setIsValid(phoneRegex.test(inputValue));
    } else {
      const vkRegex = /^(https?:\/\/)?(www\.)?(vk\.com|vkontakte\.ru)\/.+/i;
      setIsValid(vkRegex.test(inputValue));
    }
  }, [inputValue, checkMethod]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid && inputValue) {
      sessionStorage.setItem('checkData', JSON.stringify({ method: checkMethod, value: inputValue }));
      navigate('/checking');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <NotificationToast />
      
      <main className="pt-20">
        <HeroSection
          checkMethod={checkMethod}
          setCheckMethod={setCheckMethod}
          inputValue={inputValue}
          setInputValue={setInputValue}
          isValid={isValid}
          handleSubmit={handleSubmit}
        />
        <BenefitsSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
