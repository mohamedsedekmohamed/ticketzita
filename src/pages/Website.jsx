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
      title: 'Ticketzita ',
      subtitle: 'International',
      desc: t('portal.intl_desc'),
      icon: <Globe size={40} />,
      color: 'bg-[#03112C]',
      textColor: 'text-white',
      accentColor: 'text-[#F15B00]',
      features: [t('portal.feat_global'), t('portal.feat_currency'), t('portal.feat_visa')],
      link: "https://tickethub-tours.com/" // رابط السياحة الدولية
    },
    {
      id: 'local',
      title: 'Ticketzita ',
      subtitle: 'Local',
      desc: t('portal.local_desc'),
      icon: <Home size={40} />,
      color: 'bg-white',
      textColor: 'text-[#03112C]',
      accentColor: 'text-[#4D86BB]',
      features: [t('portal.feat_local_rates'), t('portal.feat_24h'), t('portal.feat_easy_pay')],
      link: "https://ticket-hub.net/" // رابط الحجز المحلي
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#F15B00] uppercase bg-[#F15B00]/10 rounded-full"
          >
            {t('portal.welcome_badge')}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-[#03112C] mb-6 tracking-tighter"
          >
            {t('portal.main_title')}
          </motion.h1>
          <p className="text-gray-500 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            {t('portal.main_subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {platforms.map((site, idx) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`${site.color} ${site.textColor} rounded-[4rem] p-10 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition-all duration-500`}
            >
              {/* Decorative Background Element */}
              <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-[0.05] blur-3xl group-hover:opacity-20 transition-opacity duration-700 ${idx === 0 ? 'bg-white' : 'bg-[#F15B00]'}`} />

              <div>
                <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-6 transition-transform duration-500 ${idx === 0 ? 'bg-[#F15B00]' : 'bg-[#03112C] text-white'}`}>
                  {site.icon}
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter italic">
                  {site.title}<span className={site.accentColor}>{site.subtitle}</span>
                </h2>
                
                <p className={`text-xl md:text-2xl mb-12 leading-relaxed font-medium ${idx === 0 ? 'text-white/60' : 'text-gray-400'}`}>
                  {site.desc}
                </p>

                <div className="space-y-5 mb-14">
                  {site.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg font-bold">
                      <div className={`p-1 rounded-full ${site.accentColor} bg-current/10`}>
                        <ShieldCheck size={24} className={site.accentColor} />
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-4 py-7 rounded-[2rem] font-black text-2xl transition-all shadow-2xl hover:scale-[1.03] active:scale-95 ${
                  idx === 0 ? 'bg-white text-[#03112C] hover:bg-[#F15B00] hover:text-white' : 'bg-[#03112C] text-white hover:bg-[#4D86BB]'
                }`}
              >
                {t('portal.visit_site')}
                <ArrowRight size={28} className={`${isRTL ? 'rotate-180' : ''} group-hover:translate-x-2 transition-transform`} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-white border border-gray-100 rounded-[3.5rem] p-12 flex flex-col md:flex-row items-center justify-around gap-10 shadow-sm"
        >
          <div className="flex flex-col items-center group">
             <div className="w-16 h-16 bg-[#F15B00]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="text-[#F15B00]" size={32} />
             </div>
             <span className="font-black text-xl text-[#03112C]">{t('portal.instant_sync')}</span>
          </div>
          
          <div className="w-px h-20 bg-gray-100 hidden md:block" />
          
          <div className="flex flex-col items-center group">
             <div className="w-16 h-16 bg-[#F15B00]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-[#F15B00]" size={32} />
             </div>
             <span className="font-black text-xl text-[#03112C]">{t('portal.one_account')}</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Website;