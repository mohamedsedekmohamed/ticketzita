import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Globe, Home, Repeat, ShieldCheck, Zap, Star, 
  ArrowRight, CheckCircle2, Users, Map, PlaneTakeoff, 
  Sparkles, MousePointerClick, Shield
} from 'lucide-react';

// مكون فرعي للبطاقات لتقليل تكرار الكود
const FeatureCard = ({ icon: Icon, title, subtitle, desc, features, btnText, dark = false, isRTL }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`group relative rounded-[3.5rem] p-8 md:p-14 overflow-hidden transition-all duration-500 shadow-2xl ${
      dark ? 'bg-[#03112C] text-white shadow-[#03112C]/30' : 'bg-white text-[#03112C] border border-gray-100'
    }`}
  >
    <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-20 ${dark ? 'bg-[#F15B00]' : 'bg-[#4D86BB]'}`} />
    
    <div className="relative z-10">
      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-xl transition-transform group-hover:rotate-[15deg] ${
        dark ? 'bg-[#F15B00]' : 'bg-[#03112C]'
      }`}>
        <Icon size={38} className="text-white" />
      </div>
      
      <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
        {title}<span className={dark ? 'text-[#4D86BB]' : 'text-[#F15B00]'}>{subtitle}</span>
      </h3>
      
      <p className={`text-lg mb-10 leading-relaxed ${dark ? 'text-white/70' : 'text-gray-500'}`}>
        {desc}
      </p>

      <div className="space-y-4 mb-12">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-4 font-bold text-md">
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${dark ? 'bg-[#4D86BB]/20 text-[#4D86BB]' : 'bg-[#F15B00]/10 text-[#F15B00]'}`}>
              <CheckCircle2 size={16}/>
            </div>
            {f}
          </div>
        ))}
      </div>

      <button className={`group/btn flex items-center justify-center gap-3 w-full py-6 rounded-3xl font-black text-lg transition-all shadow-lg ${
        dark ? 'bg-white text-[#03112C] hover:bg-[#F15B00] hover:text-white' : 'bg-[#03112C] text-white hover:bg-[#F15B00]'
      }`}>
        {btnText}
        <ArrowRight className={`w-5 h-5 transition-transform ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-2' : 'group-hover/btn:translate-x-2'}`} />
      </button>
    </div>
  </motion.div>
);

const Info = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-[#F8FAFC] overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <section className="py-20 md:py-32 px-6 relative">
        {/* الخلفية الفنية */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#F15B00]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4D86BB]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-xl border border-gray-50 mb-8"
            >
              <Sparkles size={14} className="text-[#F15B00]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#03112C]">
                {t('ecosystem.tagline')}
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#03112C] text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
            >
              {t('ecosystem.title_part1')} <br/>
              <span className="relative inline-block">
                <span className="text-[#F15B00] italic">{t('ecosystem.title_part2')}</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none"><path d="M5 15C50 5 150 5 295 15" stroke="#F15B00" strokeWidth="4" strokeLinecap="round"/></svg>
              </span>
            </motion.h2>
          </div>

          {/* Core Platforms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
            <FeatureCard 
              icon={Globe}
              title="Ticket"
              subtitle="zita"
              desc={t('ecosystem.intl_desc')}
              features={[t('ecosystem.intl_f1'), t('ecosystem.intl_f2'), t('ecosystem.intl_f3')]}
              btnText={t('ecosystem.intl_btn')}
              isRTL={isRTL}
            />
            <FeatureCard 
              icon={Home}
              dark
              title="Ticket"
              subtitle="zita"
              desc={t('ecosystem.local_desc')}
              features={[t('ecosystem.local_f1'), t('ecosystem.local_f2'), t('ecosystem.local_f3')]}
              btnText={t('ecosystem.local_btn')}
              isRTL={isRTL}
            />
          </div>

          {/* New Content: Why Choose Us (The "Why" Section) */}
         <div className="mb-40">
  <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
    <div className="max-w-2xl">
      <h4 className="text-[#F15B00] font-black uppercase tracking-widest text-sm mb-4">
        {t('ecosystem.why_title_tag')}
      </h4>
      <h3 className="text-[#03112C] text-4xl md:text-6xl font-black tracking-tight leading-tight">
        {t('ecosystem.why_main_title')}
      </h3>
    </div>
    <div className="hidden md:block pb-4">
      <MousePointerClick size={60} className="text-gray-200 -rotate-12" />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { icon: Shield, title: t('ecosystem.why_feature1_title'), desc: t('ecosystem.why_feature1_desc') },
      { icon: Zap, title: t('ecosystem.why_feature2_title'), desc: t('ecosystem.why_feature2_desc') },
      { icon: Map, title: t('ecosystem.why_feature3_title'), desc: t('ecosystem.why_feature3_desc') }
    ].map((item, idx) => (
      <motion.div 
        whileHover={{ scale: 1.05 }}
        key={idx} 
        className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
      >
        <item.icon size={40} className="text-[#F15B00] mb-6" />
        <h5 className="text-2xl font-black text-[#03112C] mb-4">{item.title}</h5>
        <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</div>

          {/* Stats Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-40"
          >
            {[
              { icon: <Users />, val: "50k+", label: t('ecosystem.stat_users') },
              { icon: <Globe />, val: "120+", label: t('ecosystem.stat_dest') },
              { icon: <PlaneTakeoff />, val: "24/7", label: t('ecosystem.stat_support') },
              { icon: <Star />, val: "4.9", label: t('ecosystem.stat_rate') },
            ].map((stat, i) => (
              <motion.div variants={{hidden: {opacity:0, scale:0.5}, visible: {opacity:1, scale:1}}} key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center group hover:border-[#F15B00] transition-all shadow-sm">
                <div className="text-[#F15B00] mb-4 flex justify-center group-hover:scale-110 group-hover:-rotate-12 transition-transform">{stat.icon}</div>
                <div className="text-4xl font-black text-[#03112C] mb-2">{stat.val}</div>
                <div className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Unified Bridge Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative bg-[#03112C] rounded-[4rem] md:rounded-[6rem] p-10 md:p-24 overflow-hidden shadow-[0_50px_100px_-20px_rgba(3,17,44,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F15B00]/30 via-transparent to-[#4D86BB]/20 opacity-60" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1 text-center lg:text-right">
                <div className="inline-flex p-5 bg-white/10 rounded-3xl text-[#F15B00] mb-8">
                  <Repeat size={40} className="animate-spin-slow" />
                </div>
                <h4 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                  {t('ecosystem.bridge_title')}
                </h4>
                <p className="text-white/60 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mb-12">
                  {t('ecosystem.bridge_desc')}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {['badge_1', 'badge_2', 'badge_3'].map((b) => (
                    <span key={b} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white text-sm font-bold hover:bg-[#F15B00] transition-colors cursor-default">
                      {t(`ecosystem.${b}`)}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-[400px] space-y-4">
                {[
                  { step: "01", text: t('ecosystem.step_1') },
                  { step: "02", text: t('ecosystem.step_2') },
                  { step: "03", text: "استمتع برحلتك مع دعم فني متكامل" }
                ].map((step, idx) => (
                  <div key={idx} className={`bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-xl transition-transform hover:translate-x-2`}>
                    <span className="text-[#F15B00] font-black block mb-2">{step.step}</span>
                    <p className="text-white text-lg font-bold">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      
      {/* CSS Animation for Spin */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Info;