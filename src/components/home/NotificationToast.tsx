import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const NotificationToast = () => {
  const [notifications, setNotifications] = useState<Array<{ id: number; message: string }>>([]);
  const [currentChecking, setCurrentChecking] = useState(2);

  const messages = [
    'Новый пользователь получил результат проверки 1 мин назад',
    'Новый пользователь только что начал проверку',
  ];

  useEffect(() => {
    let notificationId = 0;
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYGGWm98OScTgwOUKvo8LJiHQU2j9r0yHosBSd+zPLaizsIHGS57OihUBELTKXh8bllHgU7k9z1xnQpBSh+y/HajDwJHWa88OqeUxANTqjk8rJiHQU2kdr0yHosBSh+zPLaizsIHGS56+mgUhELTKXh8bllHgU7k9z1xnQpBSh+y/HajDwJHWa88OqeUxANTqjk8rJiHQU2kdr0yHosBSh+zPLaizsIHGS56+mgUhELTKXh8bllHgU7k9z1xnQpBSh+y/HajDwJHWa88OqeUxANTqjk8rJiHQU2kdr0yHosBSh+zPLaizsIHGS56+mgUhELTKXh8bllHgU7k9z1xnQpBSh+y/HajDwJHWa88OqeUxANTqjk8rJiHQU2kdr0yHosBSh+zPLaizsIHGS56+mgUhELTKXh8bllHgU7k9z1xnQpBSh+y/HajDwJHWa88OqeUxANTqjk8rJiHQU2kdr0yHosBSh+zPLaizsIHGS56+mgUhELTKXh8bllHgU7k9z1xnQpBSh+y/HajDwJHWa88OqeUxANTqjk8g==');

    const showNotification = () => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const newNotification = {
        id: notificationId++,
        message: randomMessage,
      };

      setNotifications(prev => [...prev, newNotification]);
      
      audio.play().catch(() => {});

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 6000);

      if (randomMessage.includes('начал проверку')) {
        setCurrentChecking(prev => Math.min(prev + 1, 5));
        setTimeout(() => {
          setCurrentChecking(prev => Math.max(prev - 1, 1));
        }, 85000);
      }
    };

    const interval = setInterval(showNotification, 50000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="fixed top-24 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className="bg-gradient-to-r from-[#DC143C] to-[#B91028] text-white p-4 rounded-lg shadow-2xl border border-white/20 flex items-start gap-3 animate-in slide-in-from-right"
        >
          <div className="flex-1">
            <p className="text-sm font-medium">{notification.message}</p>
          </div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationToast;
