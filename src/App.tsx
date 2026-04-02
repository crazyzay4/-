import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Beaker, Droplets, History, Lightbulb, Factory, Sparkles, TestTube, Info, ShieldAlert, Scale, ListOrdered, AlertTriangle, Gamepad2 } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const SaponificationAnimation = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden mb-12">
      {/* Reactants */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-100 rounded-2xl flex items-center justify-center shadow-sm border border-amber-200"
            whileHover={{ scale: 1.05, rotate: -5 }}
          >
            <Droplets className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" />
          </motion.div>
          <span className="mt-3 font-medium text-slate-700 text-sm">Жир (Естер)</span>
        </div>
        <div className="text-2xl sm:text-3xl font-light text-slate-400">+</div>
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-2xl flex items-center justify-center shadow-sm border border-rose-200"
            whileHover={{ scale: 1.05, rotate: 5 }}
            onClick={() => alert("Обережно, луг дуже їдкий! 🧪")}
            style={{ cursor: 'pointer' }}
          >
            <div className="font-bold text-rose-500 text-xl sm:text-2xl">NaOH</div>
          </motion.div>
          <span className="mt-3 font-medium text-slate-700 text-sm">Луг</span>
        </div>
      </div>

      {/* Arrow */}
      <motion.div 
        className="text-3xl sm:text-4xl text-slate-300 rotate-90 md:rotate-0"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        →
      </motion.div>

      {/* Products */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-2xl flex items-center justify-center shadow-sm border border-blue-200"
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-3xl sm:text-4xl">🧼</div>
          </motion.div>
          <span className="mt-3 font-medium text-slate-700 text-sm">Мило</span>
        </div>
        <div className="text-2xl sm:text-3xl font-light text-slate-400">+</div>
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-2xl flex items-center justify-center shadow-sm border border-teal-200"
            whileHover={{ scale: 1.1 }}
          >
            <div className="font-bold text-teal-600 text-sm sm:text-base text-center leading-tight">Гліце-<br/>рин</div>
          </motion.div>
          <span className="mt-3 font-medium text-slate-700 text-sm">Побічний<br/>продукт</span>
        </div>
      </div>
    </div>
  );
};

const MicelleAnimation = () => {
  const molecules = Array.from({ length: 14 });
  return (
    <div className="relative w-full aspect-square max-w-[240px] mx-auto flex items-center justify-center">
      {/* Water background effect */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-blue-100/40"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Dirt */}
      <motion.div 
        className="absolute w-14 h-14 bg-amber-800/90 rounded-full z-0"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-2 bg-amber-900/50 rounded-full blur-[2px]"></div>
      </motion.div>
      
      {/* Soap Molecules */}
      {molecules.map((_, i) => {
        const angle = (i * 360) / molecules.length;
        return (
          <motion.div
            key={i}
            className="absolute flex items-center z-10"
            style={{ 
              rotate: `${angle}deg`,
              transformOrigin: "center left",
              left: "50%",
              top: "50%",
              marginTop: "-8px", // half of height (16px)
            }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 28 }} // radius of dirt is 28px
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 + (i * 0.05), duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            {/* Tail (Hydrophobic - points IN towards dirt) */}
            <svg width="24" height="16" className="opacity-70">
              <path d="M0,8 Q3,2 6,8 T12,8 T18,8 T24,8" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {/* Head (Hydrophilic - points OUT towards water) */}
            <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-sm -ml-1 flex-shrink-0"></div>
          </motion.div>
        );
      })}
    </div>
  );
};

const backgrounds = [
  { id: 'slate', name: 'Класичний', class: 'bg-slate-50 text-slate-800 bg-[url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2394a3b8\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")]', btn: 'bg-slate-300' },
  { id: 'teal', name: 'Морський', class: 'bg-teal-50 text-teal-900 bg-[url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2314b8a6\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]', btn: 'bg-teal-300' },
  { id: 'rose', name: 'Трояндовий', class: 'bg-rose-50 text-rose-900 bg-[url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10z\' fill=\'%23f43f5e\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")]', btn: 'bg-rose-300' },
  { id: 'amber', name: 'Медовий', class: 'bg-amber-50 text-amber-900 bg-[url("data:image/svg+xml,%3Csvg width=\'28\' height=\'49\' viewBox=\'0 0 28 49\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23f59e0b\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 26l12.98 7.5H11v-1.15L0 39.7v1.3zm28-26l-12.98-7.5V0h2v6.35L28 12.69v2.3zm0 26l-12.98 7.5H17v-1.15L28 39.7v1.3z\'/%3E%3C/g%3E%3C/svg%3E")]', btn: 'bg-amber-300' },
];

const SoapGame = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<{status: 'idle' | 'success' | 'fail', title?: string, desc?: string, icon?: string}>({status: 'idle'});

  const ingredients = [
    { id: 'oil', name: 'Олія / Жир', icon: '🫒' },
    { id: 'water', name: 'Вода', icon: '💧' },
    { id: 'naoh', name: 'NaOH (Луг)', icon: '🧪' },
    { id: 'koh', name: 'KOH (Луг)', icon: '⚗️' },
    { id: 'salt', name: 'Сіль', icon: '🧂' },
    { id: 'coffee', name: 'Кава', icon: '☕' },
    { id: 'glycerin', name: 'Гліцерин', icon: '🍯' },
  ];

  const toggleIngredient = (id: string) => {
    if (result.status !== 'idle') return;
    if (selected.includes(id)) {
      setSelected(selected.filter(i => i !== id));
    } else {
      if (selected.length < 5) {
        setSelected([...selected, id]);
      }
    }
  };

  const checkRecipe = () => {
    const has = (id: string) => selected.includes(id);
    const count = selected.length;

    if (has('oil') && has('water') && has('naoh') && count === 3) {
      setResult({ status: 'success', title: 'Тверде мило!', desc: 'Класичне туалетне мило. Відмінно піниться і очищає.', icon: '🧼' });
      return;
    }
    if (has('oil') && has('water') && has('koh') && count === 3) {
      setResult({ status: 'success', title: 'Рідке мило!', desc: 'Калієвий луг робить мило м\'яким і рідким.', icon: '🧴' });
      return;
    }
    if (has('oil') && has('water') && has('naoh') && has('coffee') && count === 4) {
      setResult({ status: 'success', title: 'Кавове скраб-мило!', desc: 'Чудово відлущує шкіру і має приємний аромат.', icon: '🧽' });
      return;
    }
    if (has('oil') && has('water') && has('naoh') && has('salt') && count === 4) {
      setResult({ status: 'success', title: 'Соляне мило!', desc: 'Тверде як камінь, дуже корисне для шкіри.', icon: '🧂' });
      return;
    }
    if (has('oil') && has('water') && has('naoh') && has('glycerin') && count === 4) {
      setResult({ status: 'success', title: 'Гліцеринове мило!', desc: 'Напівпрозоре мило, що чудово зволожує шкіру.', icon: '✨' });
      return;
    }
    
    // Easter eggs / fails
    if (has('naoh') && has('water') && count === 2) {
      setResult({ status: 'fail', title: 'Обережно!', desc: 'Це просто гарячий розчин лугу. Можна отримати хімічний опік!', icon: '🔥' });
      return;
    }
    if (has('naoh') && has('koh')) {
      setResult({ status: 'fail', title: 'Забагато лугу!', desc: 'Використовуйте або NaOH, або KOH. Разом вони зроблять мило занадто агресивним.', icon: '💥' });
      return;
    }
    if (!has('oil')) {
      setResult({ status: 'fail', title: 'Де жир?', desc: 'Без жирів чи олій реакція омилення неможлива.', icon: '🤔' });
      return;
    }

    setResult({ status: 'fail', title: 'Дивна суміш...', desc: 'З цих інгредієнтів мило не вийде. Спробуйте іншу комбінацію!', icon: '🧪' });
  };

  const reset = () => {
    setSelected([]);
    setResult({status: 'idle'});
  };

  return (
    <div className="bg-white/90 backdrop-blur p-8 rounded-3xl shadow-sm border border-slate-200 text-center">
      <h3 className="text-2xl font-bold mb-2 text-slate-900">Міні-гра: Звари мило</h3>
      <p className="text-slate-600 mb-6">Оберіть інгредієнти для створення різних видів мила. Експериментуйте!</p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {ingredients.map(ing => (
          <button
            key={ing.id}
            onClick={() => toggleIngredient(ing.id)}
            className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all w-28 sm:w-32 ${
              selected.includes(ing.id) 
                ? 'border-teal-500 bg-teal-50 scale-105 shadow-md' 
                : 'border-slate-100 bg-slate-50 hover:border-teal-200'
            }`}
          >
            <span className="text-4xl mb-2">{ing.icon}</span>
            <span className="font-medium text-slate-700 text-sm leading-tight">{ing.name}</span>
          </button>
        ))}
      </div>

      {result.status === 'idle' && (
        <button 
          onClick={checkRecipe}
          disabled={selected.length < 2}
          className="px-8 py-3 bg-teal-600 text-white rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-700 transition-colors shadow-sm"
        >
          Зварити ({selected.length} інгр.)
        </button>
      )}

      {result.status === 'success' && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-6 bg-emerald-100 text-emerald-800 rounded-2xl max-w-md mx-auto shadow-inner border border-emerald-200"
        >
          <div className="text-5xl mb-4">{result.icon}</div>
          <h4 className="text-xl font-bold mb-2">{result.title}</h4>
          <p className="mb-4">{result.desc}</p>
          <button onClick={reset} className="px-6 py-2 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-sm">
            Зварити ще
          </button>
        </motion.div>
      )}

      {result.status === 'fail' && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-6 bg-rose-100 text-rose-800 rounded-2xl max-w-md mx-auto shadow-inner border border-rose-200"
        >
          <div className="text-5xl mb-4">{result.icon}</div>
          <h4 className="text-xl font-bold mb-2">{result.title}</h4>
          <p className="mb-4">{result.desc}</p>
          <button onClick={reset} className="px-6 py-2 bg-rose-600 text-white rounded-full font-bold hover:bg-rose-700 transition-colors shadow-sm">
            Спробувати ще раз
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  const [bgTheme, setBgTheme] = useState(backgrounds[0]);
  const [titleClicks, setTitleClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleTitleClick = () => {
    setTitleClicks(c => c + 1);
    if (titleClicks + 1 === 5) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 5000);
      setTitleClicks(0);
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 selection:bg-teal-200 selection:text-teal-900 ${bgTheme.class}`}>
      {/* Easter Egg Toast */}
      {showEasterEgg && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-teal-900 text-teal-50 px-6 py-4 rounded-2xl shadow-2xl border border-teal-700 flex items-center gap-4"
        >
          <div className="text-3xl">🧪</div>
          <div>
            <h4 className="font-bold">Ви знайшли секретну формулу!</h4>
            <p className="text-sm text-teal-200">C₁₇H₃₅COONa (Стеарат натрію) — типове тверде мило.</p>
          </div>
        </motion.div>
      )}

      {/* Background Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/80 backdrop-blur p-2 rounded-full shadow-sm border border-slate-200">
        {backgrounds.map(bg => (
          <button
            key={bg.id}
            onClick={() => setBgTheme(bg)}
            title={bg.name}
            className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${
              bgTheme.id === bg.id ? 'border-teal-500 scale-110' : 'border-transparent'
            } ${bg.btn}`}
          />
        ))}
      </div>

      {/* Header / Hero */}
      <header className="relative overflow-hidden bg-teal-900 text-teal-50 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Droplets className="w-16 h-16 mx-auto mb-6 text-teal-300 hover:rotate-180 transition-transform duration-700 cursor-pointer" />
            <h1 
              onClick={handleTitleClick}
              className="text-5xl sm:text-7xl font-serif font-bold mb-6 tracking-tight cursor-pointer select-none hover:text-teal-100 transition-colors"
            >
              Хімія Мила
            </h1>
            <p className="text-xl sm:text-2xl text-teal-200 max-w-2xl mx-auto font-light leading-relaxed">
              Від стародавніх рецептів до молекулярної магії: як працює найпростіший, але найважливіший засіб гігієни.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        
        {/* History Section */}
        <section id="history">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-100 text-amber-700 rounded-2xl">
                <History className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">Історія винайдення</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Історія мила налічує тисячоліття. Перші письмові згадки про милоподібну речовину знайдені на шумерських глиняних табличках, що датуються <strong>2800 роком до н.е.</strong> Рецепт складався з води, лугу (золи) та олії касії.
                </p>
                <p>
                  У Стародавньому Єгипті (папірус Еберса, 1500 р. до н.е.) мило виготовляли з тваринних і рослинних жирів, змішаних з лужними солями, і використовували як для миття, так і для лікування шкірних захворювань.
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    Легенда про гору Сапо
                  </h3>
                  <p className="text-sm">
                    За римською легендою, слово "мило" (soap) походить від гори Сапо, де приносили в жертву тварин. Дощ змивав суміш розтопленого тваринного жиру та деревного попелу в річку Тибр, де жінки помітили, що ця суміш робить прання набагато легшим.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full bg-amber-50 absolute -inset-4 -z-10 blur-3xl opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=1000&auto=format&fit=crop" 
                  alt="Старовинне мило ручної роботи" 
                  className="rounded-3xl shadow-xl object-cover aspect-4/3 w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Chemistry Section */}
        <section id="chemistry">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
                <Beaker className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">Хімія процесу</h2>
            </div>
            
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Реакція омилення (Saponification)</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  З хімічної точки зору, мило — це натрієві або калієві солі вищих карбонових (жирних) кислот. Процес утворення мила називається <strong>омиленням</strong>. Це гідроліз складних ефірів (жирів) під дією лугів.
                </p>
                
                <SaponificationAnimation />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-slate-900 flex items-center gap-2">
                        <TestTube className="w-5 h-5 text-blue-500" />
                        Формули мила
                      </h4>
                      <ul className="space-y-4 text-slate-600">
                        <li className="flex flex-col">
                          <span className="font-mono text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg w-fit mb-1 border border-slate-200">C₁₇H₃₅COONa</span>
                          <span className="text-sm">Стеарат натрію (основа твердого мила)</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-mono text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg w-fit mb-1 border border-slate-200">C₁₅H₃₁COOK</span>
                          <span className="text-sm">Пальмітат калію (основа рідкого мила)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-slate-900 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-rose-500" />
                        Інші реакції мила
                      </h4>
                      <ul className="space-y-4 text-slate-600">
                        <li className="flex flex-col">
                          <span className="font-bold text-slate-800 text-sm mb-1">З жорсткою водою (Ca²⁺, Mg²⁺)</span>
                          <span className="font-mono text-xs text-slate-900 bg-slate-100 px-2 py-1 rounded w-fit mb-1">2C₁₇H₃₅COONa + Ca²⁺ → (C₁₇H₃₅COO)₂Ca↓ + 2Na⁺</span>
                          <span className="text-sm">Утворюється нерозчинний осад (мильні пластівці), мило втрачає мийну здатність.</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-bold text-slate-800 text-sm mb-1">З кислотами</span>
                          <span className="font-mono text-xs text-slate-900 bg-slate-100 px-2 py-1 rounded w-fit mb-1">C₁₇H₃₅COONa + HCl → C₁₇H₃₅COOH↓ + NaCl</span>
                          <span className="text-sm">Виділяється вільна вища жирна кислота (стеаринова), яка не розчиняється у воді.</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-slate-900 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-500" />
                        Як мило миє?
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Молекула мила має двояку природу. Вона складається з довгого <strong>гідрофобного</strong> (відштовхує воду, притягує жир) вуглеводневого хвоста та <strong>гідрофільної</strong> (притягує воду) полярної головки. У воді молекули мила утворюють сферичні структури — <strong>міцели</strong>, які захоплюють частинки бруду та жиру всередину, дозволяючи воді змити їх.
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col items-center justify-center h-full min-h-[300px]">
                    <h5 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-8">Утворення міцели</h5>
                    <MicelleAnimation />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Manufacturing Section */}
        <section id="manufacturing">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
                <Factory className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">Виготовлення</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Холодний спосіб",
                  desc: "Олії та розчин лугу змішуються при кімнатній температурі. Реакція йде повільно, виділяючи тепло. Мило залишають 'дозрівати' на 4-6 тижнів для повного завершення реакції та випаровування зайвої вологи. Зберігає максимум корисних речовин.",
                  color: "bg-blue-50/50 border-blue-100"
                },
                {
                  title: "Гарячий спосіб",
                  desc: "Суміш олій та лугу нагрівають (варять) протягом кількох годин. Реакція омилення проходить швидко і повністю. Мило можна використовувати майже відразу після охолодження. Має більш грубу текстуру.",
                  color: "bg-rose-50/50 border-rose-100"
                },
                {
                  title: "Промислове",
                  desc: "Безперервний процес, де жири розщеплюють на жирні кислоти та гліцерин під високим тиском і температурою, а потім кислоти нейтралізують лугом. Гліцерин часто вилучають для продажу окремо.",
                  color: "bg-slate-100/50 border-slate-200"
                }
              ].map((method, i) => (
                <div key={i} className={`p-8 rounded-3xl border ${method.color} transition-transform hover:-translate-y-1 duration-300`}>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{method.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>

            {/* Detailed Cold Process Guide */}
            <div className="mt-16 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8 text-slate-900 border-b border-slate-100 pb-4">
                  Майстер-клас: Холодний спосіб вдома
                </h3>
                
                {/* Safety First */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-8">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Техніка безпеки (КРИТИЧНО ВАЖЛИВО)
                  </h4>
                  <ul className="list-disc list-inside text-red-700 space-y-2 text-sm">
                    <li><strong>ЗАВЖДИ</strong> додавайте луг у воду, а не навпаки! (Інакше можливий вибухоподібний викид).</li>
                    <li>Працюйте в захисних окулярах, рукавичках та закритому одязі.</li>
                    <li>Забезпечте хорошу вентиляцію приміщення (пари лугу шкідливі).</li>
                    <li>Тримайте під рукою оцет або розчин лимонної кислоти для нейтралізації лугу при потраплянні на шкіру.</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Ingredients */}
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-slate-900 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-emerald-500" />
                      Базові інгредієнти
                    </h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex justify-between border-b border-slate-100 pb-1"><span>Оливкова олія</span> <span className="font-mono text-slate-900">500 г</span></li>
                      <li className="flex justify-between border-b border-slate-100 pb-1"><span>Кокосова олія</span> <span className="font-mono text-slate-900">300 г</span></li>
                      <li className="flex justify-between border-b border-slate-100 pb-1"><span>Пальмова олія</span> <span className="font-mono text-slate-900">200 г</span></li>
                      <li className="flex justify-between border-b border-slate-100 pb-1"><span>Дистильована вода</span> <span className="font-mono text-slate-900">330 г</span></li>
                      <li className="flex justify-between border-b border-slate-100 pb-1"><span>Луг (NaOH)</span> <span className="font-mono text-slate-900">142 г</span></li>
                    </ul>
                  </div>

                  {/* Equipment */}
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-slate-900 flex items-center gap-2">
                      <Beaker className="w-5 h-5 text-blue-500" />
                      Обладнання
                    </h4>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
                      <li>Точні кухонні ваги (до 1 грама)</li>
                      <li>Занурювальний блендер (тільки для мила!)</li>
                      <li>Термометр (електронний або спиртовий)</li>
                      <li>Термостійкий посуд для лугу (скло або термопластик)</li>
                      <li>Каструля з нержавіючої сталі для олій</li>
                      <li>Силіконові форми для мила</li>
                    </ul>
                  </div>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="font-bold text-lg mb-6 text-slate-900 flex items-center gap-2">
                    <ListOrdered className="w-5 h-5 text-purple-500" />
                    Покроковий процес
                  </h4>
                  <div className="space-y-6">
                    {[
                      { title: "Підготовка лужного розчину", desc: "Обережно всипте NaOH у крижану дистильовану воду, постійно помішуючи. Розчин сильно нагріється. Залиште його охолоджуватися до 35-40°C." },
                      { title: "Підготовка олій", desc: "Розтопіть тверді олії (кокосову, пальмову) на водяній бані, додайте рідку оливкову. Остудіть суміш до 35-40°C." },
                      { title: "Змішування", desc: "Коли температури лугу та олій зрівняються (різниця не більше 2-3°C), обережно влийте лужний розчин в олії через ситечко." },
                      { title: "Доведення до «сліду»", desc: "Опустіть блендер у суміш. Чергуйте короткі ввімкнення блендера з ручним помішуванням. Суміш почне густішати. Коли крапля суміші залишатиме видимий слід на поверхні — процес завершено." },
                      { title: "Розливання", desc: "На етапі сліду можна додати ефірні олії або барвники. Швидко розлийте масу по формах, укутайте рушником і залиште на 24-48 годин для проходження стадії гелю." },
                      { title: "Дозрівання", desc: "Дістаньте мило з форм, наріжте (якщо це великий брусок) і залиште в добре провітрюваному сухому місці на 4-6 тижнів. За цей час завершиться реакція омилення і випарується зайва вода." }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 mb-1">{step.title}</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Facts Section */}
        <section id="facts">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-100 text-purple-700 rounded-2xl">
                <Info className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">Цікаві факти</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Мило не вбиває бактерії (якщо воно не спеціальне антибактеріальне). Воно працює як поверхнево-активна речовина, руйнуючи ліпідну оболонку вірусів і дозволяючи воді просто змити мікроби зі шкіри.",
                "У жорсткій воді (багатій на іони кальцію та магнію) звичайне мило втрачає свою ефективність. Воно вступає в реакцію з цими іонами, утворюючи нерозчинний осад — «мильні пластівці».",
                "Найдорожче мило у світі виробляють у Лівані. Воно називається Qatar і містить золотий та діамантовий пил. Шматок такого мила коштує близько 2800 доларів.",
                "До 19 століття мило було предметом розкоші і обкладалося високим податком у багатьох країнах. Лише після відкриття Ніколя Лебланом дешевого способу отримання соди з солі, мило стало доступним для всіх."
              ].map((fact, i) => (
                <div key={i} className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 hover:shadow-md transition-shadow duration-300">
                  <div className="text-purple-300 font-serif text-5xl leading-none pt-1">"</div>
                  <p className="text-slate-600 text-sm leading-relaxed pt-2">{fact}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

      </main>

      {/* Game Section */}
      <section id="game" className="max-w-5xl mx-auto px-6 pb-16">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">Інтерактив</h2>
          </div>
          
          <SoapGame />
        </FadeIn>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center mt-8">
        <p className="mb-2">© 2026 Хімія Мила. Створено з любов'ю до науки.</p>
        <p className="text-teal-400 font-medium">Сайт зробив Гладкий Ігор, учень 9-В класу</p>
      </footer>
    </div>
  );
}
