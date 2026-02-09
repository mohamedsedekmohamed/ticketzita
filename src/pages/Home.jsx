import React from 'react'
import logo from './../assets/homepic.jpeg'
import { useTranslation } from 'react-i18next';

const Home = () => {
      const { t, i18n } = useTranslation();
    
  return (
   <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={logo} 
            className=" w-full h-full "
           
            alt="Hero Background"
          />x
          {/* Overlay متدرج يعطي فخامة ويبرز النصوص */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#03112C]/80 via-[#03112C]/40 to-[#03112C]/90"></div> */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl">
         
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            {t('hero.title')} <span className="text-three">Ticketzita</span>
          </h1>
          
    

       

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* هنا ممكن تضيف لوجوهات شركات طيران أو دفع */}
          </div>
        </div>
      </div>  )
}

export default Home