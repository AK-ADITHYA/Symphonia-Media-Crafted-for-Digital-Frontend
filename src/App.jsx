import React from 'react';

import bridgeImg from './assets/bridge.jpg';
import abstractImg from './assets/abstract.jfif';
import tunnelImg from './assets/tunnel.avif';
import greenImg from './assets/green.jfif';
import redImg from './assets/red.jpg';
import pinkImg from './assets/pink.jpg';

const App = () => {
  return (
    <div className="min-h-screen bg-brand-brown text-brand-beige font-serif overflow-x-hidden selection:bg-brand-beige selection:text-brand-brown">
      
      {/* ================= HEADER SECTION ================= */}
      <header className="flex flex-col items-center pt-24 px-6 md:pt-40 pb-20">
        
        {/* LOGO (CSS Generated - No Image Needed) */}
        <div className="mb-10 flex flex-col items-center gap-1.5 opacity-90 scale-90 md:scale-100">
          {/* Top */}
          <div className="w-3.5 h-3.5 bg-brand-beige rotate-45 rounded-[1px]"></div>
          {/* Middle */}
          <div className="flex gap-1.5">
             <div className="w-3.5 h-3.5 bg-brand-beige rotate-45 rounded-[1px]"></div>
             <div className="w-3.5 h-3.5 bg-brand-beige rotate-45 rounded-[1px]"></div>
          </div>
           {/* Bottom */}
           <div className="flex gap-1.5">
             <div className="w-3.5 h-3.5 bg-brand-beige rotate-45 rounded-[1px]"></div>
             <div className="w-3.5 h-3.5 bg-brand-beige rotate-45 rounded-[1px]"></div>
             <div className="w-3.5 h-3.5 bg-brand-beige rotate-45 rounded-[1px]"></div>
          </div>
        </div>

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center max-w-5xl mx-auto leading-[1.1] tracking-tight font-normal">
          The First Media Company crafted For the <br className="hidden md:block" />
          Digital First generation
        </h1>
      </header>

      {/* ================= ORBIT CONTENT SECTION ================= */}
      {/* 'min-h-screen' ensures vertical spacing matches the Figma design */}
      <section className="relative w-full max-w-[1400px] mx-auto min-h-[900px] md:h-screen flex items-center justify-center">
        
        {/* CENTER TEXT */}
        <div className="z-20 text-center max-w-lg px-6 -mt-20">
          <h2 className="text-3xl md:text-5xl mb-6 tracking-tight leading-none">
            Where innovation <br/> meets precision.
          </h2>
          <p className="text-sm md:text-base font-sans leading-relaxed text-brand-beige/70 font-light max-w-sm mx-auto">
            Symphonia unites visionary thinkers, creative architects, and analytical experts, collaborating seamlessly to transform challenges into oppurtunities. Together, we deliver tailored solutions that drive impact and inspire growth.
          </p>
        </div>

        {/* --- FLOATING IMAGES (The Orbit) --- */}
        {/* Note: I used colored boxes as placeholders. 
            Replace the inner <div> with your <img src={...} /> tag. */}
        
        {/* 1. TOP LEFT (Bridge) */}
        <div className="absolute top-[5%] left-[5%] md:top-[15%] md:left-[10%] w-24 h-24 md:w-40 md:h-40 bg-stone-700 border border-brand-beige/20 transform -rotate-6 shadow-2xl animate-float-slow overflow-hidden">
           {<img src={bridgeImg} className="w-full h-full object-cover opacity-80" />}
        </div>

        {/* 2. TOP RIGHT (Grey Abstract) */}
        <div className="absolute top-[8%] right-[5%] md:top-[12%] md:right-[12%] w-24 h-24 md:w-36 md:h-36 bg-slate-600 border border-brand-beige/20 transform rotate-12 shadow-2xl animate-float-medium overflow-hidden">
           {<img src={abstractImg} className="w-full h-full object-cover opacity-80" />}
        </div>

        {/* 3. MIDDLE LEFT (Tunnel) */}
        <div className="absolute top-[40%] left-[-5%] md:top-[45%] md:left-[5%] w-20 h-20 md:w-32 md:h-32 bg-blue-900 border border-brand-beige/20 transform -rotate-3 shadow-2xl animate-float-fast overflow-hidden">
           <img src={tunnelImg} className="w-full h-full object-cover opacity-80" />
        </div>

        {/* 4. MIDDLE RIGHT (Green) */}
        <div className="absolute top-[38%] right-[-5%] md:top-[50%] md:right-[5%] w-20 h-20 md:w-32 md:h-32 bg-emerald-900 border border-brand-beige/20 transform rotate-6 shadow-2xl animate-float-slow overflow-hidden">
           <img src={greenImg} className="w-full h-full object-cover opacity-80" />
        </div>

        {/* 5. BOTTOM LEFT (Red Neon) */}
        <div className="absolute bottom-[25%] left-[10%] md:bottom-[20%] md:left-[18%] w-20 h-28 md:w-28 md:h-40 bg-red-900 border border-brand-beige/20 transform rotate-3 shadow-2xl animate-float-medium overflow-hidden">
           <img src={redImg} className="w-full h-full object-cover opacity-80" />
        </div>

         {/* 6. BOTTOM RIGHT (Pink Ball) */}
         <div className="absolute bottom-[28%] right-[10%] md:bottom-[15%] md:right-[20%] w-28 h-28 md:w-44 md:h-44 bg-pink-700 border border-brand-beige/20 rounded-full md:rounded-none transform -rotate-12 shadow-2xl animate-float-fast overflow-hidden">
           <img src={pinkImg} className="w-full h-full object-cover opacity-80" />
        </div>

      </section>

      {/* ================= FOOTER SECTION ================= */}
      <section className="bg-brand-tan text-brand-brown py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
           <p className="text-xl md:text-2xl font-bold tracking-tight font-sans">
             Your next section goes here.
           </p>
        </div>
      </section>

    </div>
  );
};

export default App;