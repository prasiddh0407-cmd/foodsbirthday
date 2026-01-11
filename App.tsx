import React, { useState, useTransition, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, ChevronDown, MapPin, Coffee, Utensils, Home, Gift, Users, Calendar, Infinity as InfinityIcon } from 'lucide-react';
import { PERSONAL_INFO, STORY_STEPS, FUTURE_PLANS, LETTER_TEXT } from './constants';
import { StoryStep } from './types';

const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case 'MapPin': return <MapPin className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'Utensils': return <Utensils className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Gift': return <Gift className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Calendar': return <Calendar className={className} />;
    case 'Infinity': return <InfinityIcon className={className} />;
    default: return <Heart className={className} />;
  }
};

const SectionWrapper: React.FC<{ children: React.ReactNode, id?: string, className?: string }> = ({ children, id, className = "" }) => (
  <section id={id} className={`w-full overflow-hidden px-4 md:px-6 py-12 md:py-24 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-screen-xl mx-auto w-full h-full flex flex-col justify-center"
    >
      {children}
    </motion.div>
  </section>
);

const HighlightAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#121212]">
      <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            padding: '4px',
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          }}
        >
          <div className="w-full h-full rounded-full bg-[#121212]" />
        </motion.div>

        <div className="relative w-[88%] h-[88%] bg-black rounded-full flex items-center justify-center overflow-hidden border-[4px] border-[#121212]">
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 text-white" fill="currentColor">
            <path d="M50 15 C35 15, 35 45, 50 50 C65 55, 65 85, 50 85 C45 85, 42 82, 40 78 L43 75 C45 78, 47 80, 50 80 C60 80, 60 55, 50 50 C40 45, 40 20, 50 20 C53 20, 55 22, 57 25 L60 22 C57 18, 54 15, 50 15 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ChatGraphic: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-[#f8f9fa] flex items-start justify-center p-6 pt-16">
      <div className="w-full max-w-xs space-y-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex justify-start">
          <div className="bg-[#efefef] text-slate-800 px-4 py-2 rounded-2xl rounded-bl-none max-w-[80%] text-sm md:text-base font-medium shadow-sm">hii</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="flex justify-end">
          <div className="bg-[#0095f6] text-white px-4 py-2 rounded-2xl rounded-br-none max-w-[80%] text-sm md:text-base font-medium shadow-sm">Me is not desparate, me is chill</div>
        </motion.div>
      </div>
    </div>
  );
};

const OfficialChatGraphic: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-[#f8f9fa] flex items-start justify-center p-6 pt-16">
      <div className="w-full max-w-md space-y-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex justify-start">
          <div className="bg-[#efefef] text-slate-800 px-6 py-3 rounded-2xl rounded-bl-none max-w-[90%] text-sm md:text-base font-medium shadow-sm leading-snug">This is it, there is no going back.</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="flex justify-end">
          <div className="bg-[#0095f6] text-white px-6 py-3 rounded-2xl rounded-br-none max-w-[90%] text-sm md:text-base font-medium shadow-sm leading-snug">Forever and ever</div>
        </motion.div>
      </div>
    </div>
  );
};

const SnapchatGraphic: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-start p-4 pt-6">
      <div className="w-full max-w-sm space-y-3">
        <div className="space-y-1 text-left">
          <div className="text-[10px] font-bold text-[#FF0000] px-1">ME</div>
          <div className="relative border-l-[3px] border-[#FF0000] bg-[#F3F3F3] p-3 rounded-r-lg">
             <p className="text-sm md:text-base font-medium text-black">Tanvi nang neen ista</p>
          </div>
        </div>
        <div className="space-y-1 text-left">
          <div className="text-[10px] font-bold text-[#00AAFF] px-1 uppercase">TANVI</div>
          <div className="relative border-l-[3px] border-[#00AAFF] bg-[#F3F3F3] p-3 rounded-r-lg">
             <p className="text-sm md:text-base font-medium text-black">WHATTTTTT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhoneScreamGraphic: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-[#fff5f5] flex items-start justify-center p-8 pt-4 overflow-hidden">
      <div className="relative">
        <div className="w-28 h-56 bg-slate-800 rounded-[1.75rem] border-4 border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-5 bg-slate-800 rounded-b-lg z-20 flex items-center justify-center">
            <div className="w-6 h-1 bg-slate-600 rounded-full" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-900 flex flex-col items-center pt-12">
            <div className="w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center mb-4"><Users className="text-white w-6 h-6" /></div>
            <div className="text-white font-bold text-[10px]">Tantrum</div>
            <div className="text-white/60 text-[8px] mt-1 animate-pulse">00:42</div>
          </div>
        </div>
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ y: 0, opacity: 0, scale: 0.5 }}
            animate={{ 
              y: -60 - (i * 10), 
              x: (i % 2 === 0 ? 1 : -1) * (15 + i * 8),
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.2, 1, 0.8],
              rotate: (i % 2 === 0 ? 15 : -15) + (i * 5)
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-rose-600 font-black serif text-xl md:text-2xl whitespace-nowrap pointer-events-none drop-shadow-[0_2px_4px_rgba(244,63,94,0.3)]"
          >AAAHHH!</motion.div>
        ))}
      </div>
    </div>
  );
};

const LockScreen: React.FC<{ onUnlock: () => void }> = ({ onUnlock }) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleGetIn = () => {
    setDoorOpen(true);
    setTimeout(() => {
      setIsZooming(true);
      setTimeout(() => {
        setShowWelcome(true);
        setTimeout(() => {
          onUnlock();
        }, 2000);
      }, 1000);
    }, 1200);
  };

  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden">
      {!lightsOn && (
        <button
          onClick={() => setLightsOn(true)}
          className="bg-[#0000FF] text-white border-2 border-white px-8 py-3 shadow-[6px_6px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:scale-95 transition-all z-20"
          style={{ fontFamily: 'monospace', fontSize: '20px', fontWeight: 'bold', textTransform: 'lowercase' }}
        >turn on lights</button>
      )}
      <AnimatePresence>
        {lightsOn && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1, scale: isZooming ? 6 : 1 }} transition={{ opacity: { duration: 1 }, scale: { duration: 2.5, ease: [0.7, 0, 0.3, 1] } }}
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ background: 'radial-gradient(circle at center 40%, rgba(255,255,255,0.4) 0%, rgba(0,0,0,1) 85%)' }}
          >
            <div className="relative w-72 md:w-96 h-[28rem] md:h-[38rem] perspective-1000 flex justify-center">
              <div className="absolute inset-0 bg-white rounded-t-full shadow-[inset_0_0_100px_rgba(255,255,255,0.8)] z-0 overflow-hidden flex items-center justify-center">
                 <div className="text-rose-100 flex flex-col items-center"><Heart size={80} fill="currentColor" className="opacity-20 animate-pulse" /></div>
              </div>
              <motion.div className="relative w-full h-full preserve-3d origin-left z-10" animate={{ rotateY: doorOpen ? -120 : 0 }} transition={{ duration: 2.5, ease: [0.45, 0.05, 0.55, 0.95] }}>
                <div className="absolute inset-0 rounded-t-full border-[8px] border-[#2a1b0b] shadow-2xl flex flex-col items-center justify-start overflow-hidden" style={{ backgroundColor: '#8b5e34', backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), repeating-linear-gradient(to right, #8b5e34 0%, #8b5e34 42px, #5d3f23 42px, #5d3f23 44px)`, backgroundSize: '100% 100%', boxShadow: 'inset 0 0 60px rgba(0,0,0,0.6), 0 20px 50px rgba(0,0,0,0.8)' }}>
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} />
                  <div className="relative mt-24 flex flex-col items-center z-20 drop-shadow-2xl">
                    <div className="w-5 h-5 bg-[#2a1b0b] rounded-full shadow-lg border-b-2 border-slate-900" />
                    <svg className="w-64 h-16 -mt-1" viewBox="0 0 200 60">
                      <path d="M100,5 L25,55 M100,5 L175,55" stroke="#4a3421" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="1,2" />
                      <circle cx="25" cy="55" r="5" fill="#1a1a1a" />
                      <circle cx="175" cy="55" r="5" fill="#1a1a1a" />
                    </svg>
                    <div className="relative w-64 rotate-[-1deg] -mt-2">
                       <div className="absolute -inset-1 bg-[#3d2b1f] rounded-sm -z-10 blur-[1px]" />
                       <div className="flex flex-col border-2 border-[#1a1a1a] shadow-2xl overflow-hidden rounded-sm bg-[#8b5e34]">
                          <div className="h-6 bg-[#a67c52] border-b border-[#3d2b1f] relative"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} /></div>
                          <div className="bg-[#966d44] px-4 py-6 border-b border-[#3d2b1f] flex items-center justify-center relative">
                             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} />
                             <p className="serif text-white text-sm md:text-base italic leading-tight text-center font-bold tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] z-10">Here's something I've built just for You</p>
                          </div>
                          <div className="h-8 bg-[#7a5231] relative"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }} /></div>
                       </div>
                       <div className="absolute top-[18px] left-[18px] w-4 h-4 border-2 border-[#1a1a1a] rounded-full bg-black/30 shadow-inner" />
                       <div className="absolute top-[18px] right-[18px] w-4 h-4 border-2 border-[#1a1a1a] rounded-full bg-black/30 shadow-inner" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[42%] w-full h-3 bg-[#1a1a1a]/40 shadow-inner" />
                  <div className="absolute left-0 bottom-[28%] w-full h-3 bg-[#1a1a1a]/40 shadow-inner" />
                  <div className="absolute right-12 top-[62%] flex flex-col items-center">
                    <div className="w-14 h-14 border-[6px] border-[#1a1a1a] rounded-full shadow-2xl flex items-center justify-center bg-transparent backdrop-blur-[1px]"><div className="w-2 h-2 bg-[#1a1a1a] rounded-full" /></div>
                    <div className="w-4 h-5 bg-[#1a1a1a] mt-[-6px] rounded-b-sm shadow-md" />
                  </div>
                </div>
              </motion.div>
              {!doorOpen && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="absolute top-[55%] -right-12 md:-right-20 z-30">
                  <div className="flex flex-col items-center space-y-2">
                    <button onClick={handleGetIn} className="group relative w-16 h-24 bg-[#3d2b1f] rounded-lg border-2 border-black/40 shadow-xl flex flex-col items-center justify-center active:translate-y-0.5 transition-all">
                      <div className="w-10 h-10 bg-black/20 rounded-full border border-black/10 flex items-center justify-center mb-1"><div className="w-6 h-6 bg-rose-500 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] group-hover:bg-rose-400 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.6)] transition-all" /></div>
                      <div className="w-1 h-1 bg-black/40 rounded-full" /><div className="w-1 h-1 bg-black/40 rounded-full mt-1" />
                    </button>
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="bg-black/60 px-3 py-1 rounded text-[8px] md:text-[10px] text-white font-bold uppercase tracking-widest whitespace-nowrap">Get in!</motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showWelcome && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-white flex flex-col items-center justify-center z-[110]">
             <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="text-center space-y-4">
                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}><Heart size={72} className="text-rose-500 mx-auto" fill="currentColor" /></motion.div>
                <h2 className="serif text-5xl md:text-8xl text-slate-800 font-bold italic tracking-tight">Welcome home, Peddhi 💕</h2>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const BentoStoryCard: React.FC<{ step: StoryStep, index: number, className?: string }> = ({ step, index, className }) => (
  <motion.div whileHover={{ y: -5 }} className={`relative overflow-hidden rounded-[2.5rem] border border-rose-100 bg-white group shadow-sm ${className}`}>
    <div className="absolute inset-0 z-0">
       {index === 0 ? <HighlightAnimation /> : index === 1 ? <ChatGraphic /> : index === 2 ? <div className="absolute inset-0 transition-opacity duration-300"><SnapchatGraphic /></div> : index === 3 ? <div className="absolute inset-0 transition-opacity duration-300"><PhoneScreamGraphic /></div> : index === 4 ? <OfficialChatGraphic /> : <><img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" /></>}
    </div>
    <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
      <div className={`transition-all duration-300 ${index === 2 || index === 3 || index === 4 ? 'group-hover:translate-y-[-10px]' : ''}`}>
        <h3 className={`serif text-2xl md:text-3xl mb-3 leading-tight font-bold ${index === 1 || index === 2 || index === 3 || index === 4 ? 'text-slate-800' : 'text-white'}`}>{step.title}</h3>
        {index !== 1 && <p className={`${index === 2 || index === 3 || index === 4 ? 'text-slate-600' : 'text-white/80'} text-sm md:text-base font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}>{step.description}</p>}
      </div>
    </div>
  </motion.div>
);

const AppContent: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleUnlock = () => startTransition(() => setIsUnlocked(true));
  const scrollToNext = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={`selection:bg-rose-100 selection:text-rose-700 ${isUnlocked ? '' : 'overflow-hidden h-screen'}`}>
      <AnimatePresence>{!isUnlocked && <LockScreen onUnlock={handleUnlock} />}</AnimatePresence>
      {isUnlocked && (
        <div className="scroll-container">
          <SectionWrapper id="hero" className="bg-gradient-to-b from-[#fdf8f7] to-[#ffffff] text-center min-h-[110vh]">
            <div className="space-y-8">
              <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="text-rose-400 mx-auto"><Heart size={64} fill="currentColor" /></motion.div>
              <h1 className="serif text-6xl md:text-9xl text-slate-800 leading-[1] font-bold">Happy Birthday <br /><span className="text-rose-500 italic">Tantrum</span></h1>
              <p className="text-slate-500 max-w-2xl mx-auto text-xl md:text-3xl font-light italic leading-relaxed">"{PERSONAL_INFO.TAGLINE}"</p>
              <p className="text-slate-400 font-bold uppercase tracking-[0.5em] text-xs md:text-sm pt-6 opacity-60">— {PERSONAL_INFO.YOUR_NAME}</p>
              <div className="pt-16"><button onClick={() => scrollToNext('story')} className="group relative flex items-center space-x-4 mx-auto bg-[#1a202c] text-white rounded-full py-5 px-14 transition-all hover:bg-slate-900 active:scale-95 text-xl shadow-2xl shadow-rose-100"><span className="font-medium">The Journey</span><ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" /></button></div>
            </div>
            <div className="absolute bottom-12 left-0 right-0 animate-bounce flex justify-center text-rose-200 pointer-events-none"><ChevronDown size={32} /></div>
          </SectionWrapper>

          <SectionWrapper id="story" className="bg-white">
            <div className="text-center mb-24"><h2 className="serif text-5xl md:text-7xl text-slate-800 mb-6 font-bold">Our Story</h2><div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full" /></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[350px] md:auto-rows-[380px]">
              <BentoStoryCard index={0} step={STORY_STEPS[0]} className="md:col-span-2 md:row-span-2" /><BentoStoryCard index={1} step={STORY_STEPS[1]} className="md:col-span-1 md:row-span-1" /><BentoStoryCard index={2} step={STORY_STEPS[2]} className="md:col-span-1 md:row-span-1" /><BentoStoryCard index={3} step={STORY_STEPS[3]} className="md:col-span-1 md:row-span-1" /><BentoStoryCard index={4} step={STORY_STEPS[4]} className="md:col-span-2 md:row-span-1" />
            </div>
          </SectionWrapper>

          <SectionWrapper id="future" className="bg-[#fdf8f7]">
            <div className="text-center mb-24"><h2 className="serif text-5xl md:text-7xl text-slate-800 mb-6 font-bold italic">The Next Page</h2></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
              {FUTURE_PLANS.map((plan, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} className="bg-white p-12 rounded-[3.5rem] border border-rose-100 flex flex-col items-center text-center space-y-8 shadow-sm hover:shadow-xl transition-all">
                  <div className="bg-rose-50 p-8 rounded-[2.5rem] text-rose-500"><IconComponent name={plan.icon} className="w-10 h-10" /></div>
                  <h4 className="serif font-bold text-slate-800 text-2xl md:text-3xl">{plan.title}</h4>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>

          {/* Persistent Letter Section using Priscilla-style font (Satisfy) and themed color (rose-500) */}
          <SectionWrapper id="letter" className="bg-white">
            <div className="max-w-5xl mx-auto py-12 px-6">
              <div className="script text-3xl md:text-5xl lg:text-6xl text-rose-500 leading-[1.6] text-center font-normal whitespace-pre-wrap tracking-wide drop-shadow-sm">
                {LETTER_TEXT}
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper id="footer" className="bg-slate-900 text-white text-center py-32 md:py-56">
            <div className="space-y-24">
              <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="serif text-5xl md:text-9xl leading-[1.1] font-bold tracking-tighter">Thank you for being my favorite chaos.</motion.h2>
              <div className="space-y-4">
                <p className="text-rose-400 text-3xl md:text-5xl serif italic font-medium">Happy Birthday {PERSONAL_INFO.HER_NAME}</p>
                <div className="flex items-center justify-center space-x-2 pt-4"><div className="h-px w-8 bg-slate-700" /><p className="text-slate-500 font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs">with love from prasheeeed</p><div className="h-px w-8 bg-slate-700" /></div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => (
  <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-[#fdf8f7] text-rose-500 serif text-2xl italic animate-pulse">building your world...</div>}>
    <AppContent />
  </Suspense>
);

export default App;