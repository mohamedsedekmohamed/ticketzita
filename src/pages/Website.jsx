import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, Home, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';

const Website = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const platforms = [
    {
      id: 'international',
      title: 'Ticketzita',
      subtitle: 'International',
      desc: t('portal.intl_desc'),
      icon: <Globe size={40} />,
      color: 'bg-[#03112C]',
      textColor: 'text-white',
      accentColor: 'text-[#F15B00]',
      features: [t('portal.feat_global'), t('portal.feat_currency'), t('portal.feat_visa')],
      link: "https://intl.ticketzita.com" // رابط الموقع الدولي
    },
    {
      id: 'local',
      title: 'Ticketzita',
      subtitle: 'Local',
      desc: t('portal.local_desc'),
      icon: <Home size={40} />,
      color: 'bg-white',
      textColor: 'text-[#03112C]',
      accentColor: 'text-[#4D86BB]',
      features: [t('portal.feat_local_rates'), t('portal.feat_24h'), t('portal.feat_easy_pay')],
      link: "https://local.ticketzita.com" // رابط الموقع المحلي
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[#03112C] mb-6"
          >
            {t('portal.main_title')}
          </motion.h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            {t('portal.main_subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {platforms.map((site, idx) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`${site.color} ${site.textColor} rounded-[3.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group flex flex-col justify-between border border-gray-100`}
            >
              {/* Decorative Circle */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl ${idx === 0 ? 'bg-white' : 'bg-[#F15B00]'}`} />

              <div>
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-lg ${idx === 0 ? 'bg-[#F15B00]' : 'bg-[#03112C] text-white'}`}>
                  {site.icon}
                </div>
                
                <h2 className="text-5xl font-black mb-2 tracking-tighter">
                  {site.title}<span className={site.accentColor}>{site.subtitle}</span>
                </h2>
                
                <p className={`text-xl mb-10 leading-relaxed ${idx === 0 ? 'text-white/70' : 'text-gray-500'}`}>
                  {site.desc}
                </p>

                <div className="grid grid-cols-1 gap-4 mb-12">
                  {site.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold">
                      <ShieldCheck size={20} className={site.accentColor} />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={site.link}
                className={`flex items-center justify-center gap-4 py-6 rounded-2xl font-black text-xl transition-all shadow-xl hover:scale-[1.02] ${
                  idx === 0 ? 'bg-white text-[#03112C]' : 'bg-[#03112C] text-white hover:bg-[#F15B00]'
                }`}
              >
                {t('portal.visit_site')}
                <ArrowRight className={`${isRTL ? 'rotate-180' : ''}`} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Unified Info Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 bg-white border border-gray-100 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-around gap-8 text-center"
        >
          <div className="flex flex-col items-center">
             <Zap className="text-[#F15B00] mb-3" size={32} />
             <span className="font-black text-[#03112C]">{t('portal.instant_sync')}</span>
          </div>
          <div className="w-px h-12 bg-gray-100 hidden md:block" />
          <div className="flex flex-col items-center">
             <Star className="text-[#F15B00] mb-3" size={32} />
             <span className="font-black text-[#03112C]">{t('portal.one_account')}</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Website;