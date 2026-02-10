import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Globe, Repeat, ShieldCheck, Zap, Star, 
  ArrowRight, CheckCircle2, Users, Map, PlaneTakeoff, 
  Sparkles, MousePointerClick, Shield, Plane, Box
} from 'lucide-react';
import { FaTruck } from "react-icons/fa";

// 1. مكون البطاقة المطور
const FeatureCard = ({ icon: Icon, title, subtitle, desc, features = [], btnText, dark = false, isRTL }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`group relative rounded-[3rem] p-8 md:p-12 overflow-hidden transition-all duration-500 shadow-2xl ${
      dark ? 'bg-[#03112C] text-white shadow-[#03112C]/30' : 'bg-white text-[#03112C] border border-gray-100'
    }`}
  >
    {/* تأثير الإضاءة الخلفية */}
    <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-20 ${dark ? 'bg-[#F15B00]' : 'bg-[#4D86BB]'}`} />
    
    <div className="relative z-10">
      {/* الأيقونة */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform group-hover:rotate-[15deg] ${
        dark ? 'bg-[#F15B00]' : 'bg-[#03112C]'
      }`}>
        <Icon size={32} className="text-white" />
      </div>
      
      {/* العناوين */}
      <h3 className="text-3xl font-black mb-4 leading-tight">
        {title} <span className={dark ? 'text-[#4D86BB]' : 'text-[#F15B00]'}>{subtitle}</span>
      </h3>
      
      <p className={`text-base mb-8 leading-relaxed ${dark ? 'text-white/70' : 'text-gray-500'}`}>
        {desc}
      </p>

      {/* القائمة (تظهر فقط إذا وجدت بيانات) */}
      {features.length > 0 && (
        <div className="space-y-3 mb-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 font-bold text-sm">
              <CheckCircle2 size={16} className={dark ? 'text-[#4D86BB]' : 'text-[#F15B00]'} />
              {f}
            </div>
          ))}
        </div>
      )}

      {/* الزر */}
      <button className={`group/btn flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-black text-md transition-all shadow-lg ${
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
    <div className="bg-[#F8FAFC] overflow-x-hidden font-sans" dir={isRTL ? 'rtl' : 'ltr'}>
      <section className="py-20 md:py-32 px-6 relative">
        
        {/* الخلفية الفنية */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#F15B00]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4D86BB]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* 1. قسم الهيدر الأساسي */}
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
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                  <path d="M5 15C50 5 150 5 295 15" stroke="#F15B00" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h2>
          </div>

        {/* 2. شبكة الخدمات (Core Services) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
  <FeatureCard 
    icon={Users} 
    title={t("services.passenger.title")}
    subtitle={t("services.passenger.subtitle")}
    desc={t("services.passenger.desc")}
    btnText={t("services.btn")}
    isRTL={isRTL}
  />

  <FeatureCard 
    icon={FaTruck} 
    dark={true}
    title={t("services.cargo.title")}
    subtitle={t("services.cargo.subtitle")}
    desc={t("services.cargo.desc")}
    btnText={t("services.btn")}
    isRTL={isRTL}
  />

  <FeatureCard 
    icon={Map} 
    title={t("services.tourism.title")}
    subtitle={t("services.tourism.subtitle")}
    desc={t("services.tourism.desc")}
    btnText={t("services.btn")}
    isRTL={isRTL}
  />

  <FeatureCard 
    icon={Plane} 
    dark={true}
    title={t("services.flight.title")}
    subtitle={t("services.flight.subtitle")}
    desc={t("services.flight.desc")}
    btnText={t("services.btn")}
    isRTL={isRTL}
  />
</div>

          {/* 3. قسم لماذا نحن (Why Choose Us) */}
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

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { icon: Shield, title: t('ecosystem.feature1_title'), desc: t('ecosystem.feature1_desc') },
    { icon: Users, title: t('ecosystem.feature2_title'), desc: t('ecosystem.feature2_desc') },
    { icon: Zap, title: t('ecosystem.feature3_title'), desc: t('ecosystem.feature3_desc') },
    { icon: PlaneTakeoff, title: t('ecosystem.feature4_title'), desc: t('ecosystem.feature4_desc') },
    { icon: Star, title: t('ecosystem.feature5_title'), desc: t('ecosystem.feature5_desc') },
  ].map((item, idx) => (
    <motion.div 
      whileHover={{ scale: 1.05, translateY: -10 }}
      key={idx} 
      className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-16 h-16 bg-[#F15B00]/10 rounded-2xl flex items-center justify-center mb-6">
        <item.icon size={32} className="text-[#F15B00]" />
      </div>
      <h5 className="text-2xl font-black text-[#03112C] mb-4">{item.title}</h5>
      <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
    </motion.div>
  ))}
</div>
          </div>

     <motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-40"
>
  {[
    { icon: <Users size={24}/>, val: "50k+", label: t('ecosystem.stat_users'), color: "from-orange-500/20" },
    { icon: <Globe size={24}/>, val: "143+", label: t('ecosystem.stat_dest'), color: "from-blue-500/20" },
    { icon: <PlaneTakeoff size={24}/>, val: "24/7", label: t('ecosystem.stat_support'), color: "from-emerald-500/20" },
    { icon: <Star size={24}/>, val: "4.9", label: t('ecosystem.stat_rate'), color: "from-yellow-500/20" },
  ].map((stat, i) => (
    <motion.div 
      variants={{hidden: {opacity:0, y:20}, visible: {opacity:1, y:0}}} 
      key={i} 
      className="relative overflow-hidden bg-white p-10 rounded-[3rem] border border-gray-100 text-center group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* خلفية Hover ملونة ناعمة */}
      <div className={`absolute inset-0 bg-gradient-to-b ${stat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="text-[#F15B00] mb-5 flex justify-center transform group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700">
          <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white shadow-sm">
            {stat.icon}
          </div>
        </div>
        <div className="text-5xl font-black text-[#03112C] mb-2 tracking-tighter">{stat.val}</div>
        <div className="text-gray-400 font-bold uppercase text-xs tracking-[0.15em]">{stat.label}</div>
      </div>
    </motion.div>
  ))}
</motion.div>
{/* Companies Section */}
<section className="py-24 bg-white relative overflow-hidden">
  <div className="container mx-auto px-6">
    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-2xl">
        <h4 className="text-[#F15B00] font-black uppercase tracking-[0.3em] text-sm mb-4">
          {t('companies.tagline')}
        </h4>
        <h2 className="text-[#03112C] text-5xl md:text-7xl font-black tracking-tighter leading-none">
          {/* {t('companies.main_title')} */}
        </h2>
      </div>
      <p className="text-gray-500 font-medium max-w-sm text-lg leading-relaxed">
        {t('companies.description')}
      </p>
    </div>

    {/* Company Card */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <motion.div 
        whileHover={{ y: -10 }}
        className="lg:col-span-8 relative group overflow-hidden rounded-[4rem] bg-[#03112C] p-12 md:p-20 flex flex-col justify-between min-h-[500px]"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#F15B00]/20 via-transparent to-transparent opacity-50 group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4D86BB]/10 rounded-full blur-[100px]" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white mb-10 backdrop-blur-md">
            <Globe className="text-[#F15B00]" size={20} />
            <span className="font-bold tracking-widest uppercase text-xs">{t('companies.location_egypt')}</span>
          </div>
          
          <h3 className="text-white text-4xl md:text-8xl font-black mb-8 tracking-tighter">
            {t('companies.egypt_name')}
          </h3>
          
          <p className="text-white/60 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
             {t('companies.egypt_desc')}
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-4 mt-12">
          {['transport', 'tourism', 'travel'].map((tag) => (
            <div key={tag} className="px-6 py-3 rounded-xl bg-white/10 border border-white/5 text-white/80 font-bold text-sm backdrop-blur-sm">
              # {t(`companies.tags.${tag}`)}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Side Info / Call to Action */}
      <div className="lg:col-span-4 flex flex-col gap-8">
        <div className="flex-1 bg-gray-50 rounded-[4rem] p-12 border border-gray-100 flex flex-col justify-center">
          <div className="w-16 h-16 bg-[#03112C] rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl">
            <Sparkles size={30} />
          </div>
          <h5 className="text-[#03112C] text-3xl font-black mb-4 tracking-tight">
            {t('companies.cta_title')}
          </h5>
          <p className="text-gray-500 font-medium mb-8">
            {t('companies.cta_desc')}
          </p>
          <button className="group flex items-center gap-4 text-[#F15B00] font-black text-lg uppercase tracking-wider">
            {t('companies.view_details')}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
      </section>
      
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