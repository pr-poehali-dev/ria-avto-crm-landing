import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface LoanData {
  bankName: string;
  carBrand: string;
  carModel: string;
  carYear: number;
  carPrice: number;
  loanTerm: number;
  interestRate: number;
  downPayment: number;
  loanAmount: number;
  monthlyPayment: number;
  approvedLimit?: number;
  secondaryRate?: number;
}

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentDate] = useState(new Date().toLocaleDateString('ru-RU'));
  
  const [businessFinance, setBusinessFinance] = useState<LoanData>({
    bankName: 'СовкомБанк',
    carBrand: 'Toyota',
    carModel: 'Camry',
    carYear: 2024,
    carPrice: 2850000,
    loanTerm: 60,
    interestRate: 10.25,
    downPayment: 570000,
    loanAmount: 2280000,
    monthlyPayment: 48500
  });

  const [dilerPlus, setDilerPlus] = useState<LoanData>({
    bankName: 'ВТБ',
    carBrand: 'Выберите автомобиль',
    carModel: '',
    carYear: 2024,
    carPrice: 0,
    loanTerm: 60,
    interestRate: 16.85,
    secondaryRate: 11.75,
    downPayment: 0,
    loanAmount: 3000000,
    monthlyPayment: 45000,
    approvedLimit: 3000000
  });

  const [calculatorData, setCalculatorData] = useState<LoanData>({
    bankName: 'Выберите банк',
    carBrand: '',
    carModel: '',
    carYear: 2024,
    carPrice: 1000000,
    loanTerm: 60,
    interestRate: 12.0,
    downPayment: 200000,
    loanAmount: 800000,
    monthlyPayment: 17785
  });

  const calculateAnnuityPayment = (principal: number, rate: number, months: number): number => {
    const monthlyRate = rate / 100 / 12;
    return Math.round(principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Building2" className="h-8 w-8 text-blue-600" />
                <div>
                  <h1 className="text-xl font-bold text-slate-900">CRM RIA-AVTO</h1>
                  <p className="text-sm text-slate-600">Кредитный отдел</p>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-slate-600">
              <p>CRM система кредитного отдела. Кабинет № К-5695-25</p>
              <p>Старший кредитный специалист Шубин П.В.</p>
              <p className="font-medium">{currentDate}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Выгрузка кредитных условий № А/С 2547-25
          </h2>
          <p className="text-slate-600 mt-1">клиент: [ФИО клиента]</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-slate-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Главная
            </TabsTrigger>
            <TabsTrigger value="calculator" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Кредитный калькулятор
            </TabsTrigger>
            <TabsTrigger value="dealer" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Дилерские авто
            </TabsTrigger>
            <TabsTrigger value="parameters" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Параметры
            </TabsTrigger>
            <TabsTrigger value="final" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Итоговый расчет
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Business Finance Program */}
              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Car" className="h-5 w-5 text-blue-600" />
                    <span>Расчет на Банковские автомобили</span>
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">Программа: «Business Finance»</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600">Информация об авто:</p>
                      <p className="font-medium">{businessFinance.carBrand} {businessFinance.carModel} {businessFinance.carYear}</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Стоимость автомобиля:</p>
                      <p className="font-medium">{businessFinance.carPrice.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Срок кредита:</p>
                      <p className="font-medium">{businessFinance.loanTerm} месяцев</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Процентная ставка:</p>
                      <p className="font-medium">{businessFinance.interestRate}%</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Первоначальный взнос:</p>
                      <p className="font-medium">{businessFinance.downPayment.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Сумма кредита:</p>
                      <p className="font-medium">{businessFinance.loanAmount.toLocaleString('ru-RU')} ₽</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Обязательные страховые продукты:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Страхование жизни - 60 мес.</li>
                      <li>• Страхование «КАСКО» - 60 мес.</li>
                      <li>• Карта помощи на дороге «РАТ» - 60 мес.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-lg font-bold text-blue-900">
                      Ежемесячный платеж: {businessFinance.monthlyPayment.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>• Банк установил мораторий на досрочное погашение (36 месяцев)</p>
                    <p>• Автомобиль залоговый. ПТС сдается в банк до полной выплаты</p>
                    <p>• Все страховые продукты включены единовременно на весь срок</p>
                  </div>
                </CardContent>
              </Card>

              {/* Diler+ Program */}
              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Award" className="h-5 w-5 text-green-600" />
                    <span>Расчет одобренного лимита на дилерские автомобили</span>
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">«Diler+»</Badge>
                    <Badge className="bg-green-100 text-green-800">Добросовестный заемщик</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600">Наименование банка:</p>
                      <p className="font-medium">{dilerPlus.bankName}</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Одобренный лимит:</p>
                      <p className="font-medium">{dilerPlus.approvedLimit?.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Процентная ставка:</p>
                      <p className="font-medium">
                        {dilerPlus.interestRate}% → {dilerPlus.secondaryRate}%
                      </p>
                      <p className="text-xs text-slate-500">первые 2 платежа → после</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Срок кредита:</p>
                      <p className="font-medium">{dilerPlus.loanTerm} месяцев</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Страховые продукты:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Страхование жизни</li>
                      <li>• Без страхования «КАСКО»</li>
                      <li>• Карта помощи на дороге - Отсутствует</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-lg font-bold text-green-900">
                      Ежемесячный платеж: {dilerPlus.monthlyPayment.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>• Досрочное погашение доступно без штрафов и комиссий</p>
                    <p>• Подарки: первое ТО, диагностика, предпродажная подготовка</p>
                    <p>• Экспресс кредитование - однодневное</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" className="h-4 w-4 mr-2" />
                Отправить на согласование автомобиль
              </Button>
              <Button variant="outline" disabled className="text-slate-400">
                <Icon name="Download" className="h-4 w-4 mr-2" />
                Выгрузить документы
              </Button>
            </div>
          </TabsContent>

          {/* Calculator Tab */}
          <TabsContent value="calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Calculator" className="h-5 w-5 text-blue-600" />
                  <span>Кредитный калькулятор</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Наименование банка</label>
                    <input 
                      type="text" 
                      value={calculatorData.bankName}
                      onChange={(e) => setCalculatorData({...calculatorData, bankName: e.target.value})}
                      className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Сумма кредита</label>
                    <input 
                      type="number" 
                      value={calculatorData.loanAmount}
                      onChange={(e) => {
                        const amount = Number(e.target.value);
                        const payment = calculateAnnuityPayment(amount, calculatorData.interestRate, calculatorData.loanTerm);
                        setCalculatorData({...calculatorData, loanAmount: amount, monthlyPayment: payment});
                      }}
                      className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Процентная ставка (%)</label>
                    <input 
                      type="number" 
                      step="0.01"
                      value={calculatorData.interestRate}
                      onChange={(e) => {
                        const rate = Number(e.target.value);
                        const payment = calculateAnnuityPayment(calculatorData.loanAmount, rate, calculatorData.loanTerm);
                        setCalculatorData({...calculatorData, interestRate: rate, monthlyPayment: payment});
                      }}
                      className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Срок кредита (мес.)</label>
                    <input 
                      type="number" 
                      value={calculatorData.loanTerm}
                      onChange={(e) => {
                        const term = Number(e.target.value);
                        const payment = calculateAnnuityPayment(calculatorData.loanAmount, calculatorData.interestRate, term);
                        setCalculatorData({...calculatorData, loanTerm: term, monthlyPayment: payment});
                      }}
                      className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Результат расчета:</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-blue-700">Ежемесячный платеж:</p>
                      <p className="text-2xl font-bold text-blue-900">
                        {calculatorData.monthlyPayment.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-700">Общая переплата:</p>
                      <p className="text-xl font-bold text-blue-900">
                        {((calculatorData.monthlyPayment * calculatorData.loanTerm) - calculatorData.loanAmount).toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="FileText" className="h-4 w-4 mr-2" />
                  Показать график платежей
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dealer Tab */}
          <TabsContent value="dealer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Car" className="h-5 w-5 text-green-600" />
                  <span>Дилерские автомобили - {dilerPlus.bankName}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon name="Car" className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Выберите автомобиль</h3>
                  <p className="text-slate-600 mb-6">Для расчета кредитных условий сначала выберите автомобиль из дилерской сети</p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Icon name="Search" className="h-4 w-4 mr-2" />
                    Каталог дилерских автомобилей
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Parameters Tab */}
          <TabsContent value="parameters" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Программа «Business Finance»</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Марка автомобиля</label>
                      <input 
                        type="text" 
                        value={businessFinance.carBrand}
                        onChange={(e) => setBusinessFinance({...businessFinance, carBrand: e.target.value})}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Модель</label>
                      <input 
                        type="text" 
                        value={businessFinance.carModel}
                        onChange={(e) => setBusinessFinance({...businessFinance, carModel: e.target.value})}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Стоимость автомобиля</label>
                      <input 
                        type="number" 
                        value={businessFinance.carPrice}
                        onChange={(e) => setBusinessFinance({...businessFinance, carPrice: Number(e.target.value)})}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Ежемесячный платеж</label>
                      <input 
                        type="number" 
                        value={businessFinance.monthlyPayment}
                        onChange={(e) => setBusinessFinance({...businessFinance, monthlyPayment: Number(e.target.value)})}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Программа «Diler+»</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Наименование банка</label>
                      <input 
                        type="text" 
                        value={dilerPlus.bankName}
                        onChange={(e) => setDilerPlus({...dilerPlus, bankName: e.target.value})}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Одобренный лимит</label>
                      <input 
                        type="number" 
                        value={dilerPlus.approvedLimit}
                        onChange={(e) => setDilerPlus({...dilerPlus, approvedLimit: Number(e.target.value)})}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Первичная ставка (%)</label>
                      <input 
                        type="number" 
                        step="0.01"
                        value={dilerPlus.interestRate}
                        onChange={(e) => setDilerPlus({...dilerPlus, interestRate: Number(e.target.value)})}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Вторичная ставка (%)</label>
                      <input 
                        type="number" 
                        step="0.01"
                        value={dilerPlus.secondaryRate}
                        onChange={(e) => setDilerPlus({...dilerPlus, secondaryRate: Number(e.target.value)})}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Final Tab */}
          <TabsContent value="final" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="FileText" className="h-5 w-5 text-blue-600" />
                  <span>Итоговый расчет по программе «Добросовестный заемщик»</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon name="FileText" className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Выберите автомобиль для расчета</h3>
                  <p className="text-slate-600 mb-6">Итоговый расчет будет доступен после выбора автомобиля в разделе "Дилерские авто"</p>
                  <Button variant="outline">
                    <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
                    Перейти к выбору автомобиля
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-xs text-slate-500 text-center">
            CRM 2025 Все права защищены. Вся представленная на сайте информация носит исключительно 
            информационный характер и не является публичной офертой, определяемой положениями 
            Статьи 437 Гражданского кодекса Российской Федерации.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;