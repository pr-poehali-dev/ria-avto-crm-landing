import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const CheckingAnimation = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [checkData] = useState(() => {
    const data = sessionStorage.getItem('checkData');
    return data ? JSON.parse(data) : null;
  });

  const stages = [
    { text: 'Подключение к серверу...', duration: 7000 },
    { text: 'Поиск аккаунтов в соцсетях и на сайтах знакомств...', duration: 9000 },
    { text: 'Анализ активности в сети...', duration: 8000 },
    { text: 'Цифровой анализ мессенджеров...', duration: 9000 },
    { text: 'Анализ геопозиции...', duration: 8000 },
    { text: 'Анализ скрытых интересов в сети...', duration: 9000 },
    { text: 'Поиск скрытых друзей...', duration: 8000 },
    { text: 'Обнаружение диалогов VK...', duration: 9000 },
    { text: 'Обнаружение диалогов WhatsApp...', duration: 8000 },
    { text: 'Выгрузка активности с другими пользователями в VK...', duration: 9000 },
    { text: 'Анализ цифровых поведений...', duration: 8000 },
    { text: 'Обнаружены удалённые аккаунты в соцсетях...', duration: 9000 },
    { text: 'Анализ обнаруженных дополнительных профилей и аккаунтов...', duration: 10000 },
    { text: 'Финальная обработка результатов...', duration: 9000 },
    { text: 'Выгрузка информации…', duration: 7000 },
    { text: 'Структурирование результатов проверки…', duration: 5000 },
    { text: 'Сохранение отчета с результатами проверки…', duration: 4000 },
  ];

  const technicalLogs = [
    '[{time}] Connecting to verification server...',
    '[{time}] Server connection established',
    '[{time}] Initializing data mining protocols',
    '[{time}] VK Profile ID search initiated',
    '[{time}] VK profile analysis - code search...',
    '[{time}] Uploading VK profile information',
    '[{time}] Deep scanning social network graph',
    '[{time}] Pattern recognition algorithm active',
    '[{time}] Analyzing digital activity with other users',
    '[{time}] WhatsApp metadata extraction in progress',
    '[{time}] Telegram channel activity detected',
    '[{time}] Geolocation data processing',
    '[{time}] Hidden friends network mapping',
    '[{time}] Dating sites database query initiated',
    '[{time}] Deleted accounts recovery process started',
    '[{time}] Message frequency analysis complete',
    '[{time}] Social behavior patterns identified',
    '[{time}] Cross-platform activity correlation',
    '[{time}] Data aggregation from multiple sources',
    '[{time}] Summarizing results from sources...',
    '[{time}] Generating comprehensive report',
    '[{time}] Report compilation finalized',
  ];

  useEffect(() => {
    if (!checkData) {
      navigate('/');
      return;
    }

    const totalDuration = stages.reduce((sum, stage) => sum + stage.duration, 0);
    let elapsedTime = 0;
    
    const progressInterval = setInterval(() => {
      elapsedTime += 100;
      const newProgress = Math.min((elapsedTime / totalDuration) * 100, 100);
      setProgress(newProgress);
    }, 100);

    const stageIndex = 0;
    const stageIntervals: NodeJS.Timeout[] = [];
    
    stages.forEach((stage, index) => {
      const timeout = setTimeout(() => {
        setCurrentStage(index);
      }, stages.slice(0, index).reduce((sum, s) => sum + s.duration, 0));
      stageIntervals.push(timeout);
    });

    const finalTimeout = setTimeout(() => {
      navigate('/results');
    }, totalDuration + 500);

    return () => {
      clearInterval(progressInterval);
      stageIntervals.forEach(clearTimeout);
      clearTimeout(finalTimeout);
    };
  }, [checkData, navigate]);

  useEffect(() => {
    const logInterval = setInterval(() => {
      const randomLog = technicalLogs[Math.floor(Math.random() * technicalLogs.length)];
      const time = new Date().toLocaleTimeString('ru-RU', { hour12: false });
      const formattedLog = randomLog.replace('{time}', time);
      
      setLogs(prev => [...prev, formattedLog].slice(-15));
    }, Math.random() * 2000 + 1000);

    return () => clearInterval(logInterval);
  }, []);

  if (!checkData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
            <div className="relative">
              <Loader2 className="w-20 h-20 text-[#DC143C] animate-spin" />
              <div className="absolute inset-0 rounded-full bg-[#DC143C]/20 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Верность-Про
          </h1>
          
          <p className="text-gray-400 mb-2">
            {checkData.method === 'phone' 
              ? `Поиск и анализ информации по номеру телефона ${checkData.value}`
              : `Поиск и анализ информации по аккаунту ${checkData.value}`}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Общий прогресс</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 text-[#0080FF] animate-spin flex-shrink-0" />
                <p className="text-white font-medium">
                  {stages[currentStage]?.text || 'Инициализация...'}
                </p>
              </div>

              <div className="space-y-2 text-sm text-gray-500">
                {stages.slice(Math.max(0, currentStage - 2), currentStage).map((stage, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="line-through">{stage.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black rounded-xl p-4 border border-gray-800 font-mono text-xs overflow-hidden">
            <div className="h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {logs.map((log, index) => (
                <div key={index} className="text-green-500 mb-1 animate-pulse">
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>Пожалуйста, не закрывайте эту страницу. Анализ займет около минуты.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckingAnimation;
