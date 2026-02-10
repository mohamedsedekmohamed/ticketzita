import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from './../assets/homepic.jpeg'; // صورة الشاشات الكبيرة
import morewidth from '../assets/small.jpeg'; // صورة الموبايل

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* صورة الموبايل: تظهر افتراضياً وتختفي في الشاشات الكبيرة */}
        <img 
          src={morewidth} 
          className="w-full h-full object-cover md:hidden" 
          alt="Mobile Hero Background"
        />
        
        {/* صورة الشاشات الكبيرة: تختفي افتراضياً وتظهر من مقاس md فأكبر */}
        <img 
          src={logo} 
          className="hidden md:block w-full h-full " 
          alt="Desktop Hero Background"
        />
        
        {/* طبقة تغميق اختيارية لتحسين وضوح النص */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
          {t('hero.title')} <span className="text-three">Ticketzita</span>
        </h1>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* محتوى إضافي */}
        </div>
      </div>
    </div>
  );
};

export default Home;