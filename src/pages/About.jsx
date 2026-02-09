import React, { useEffect } from "react";
import { 
  ShieldCheck, 
  Wallet, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  TrendingDown,
  Lock,
  Users
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';
const AboutTravel = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  const colors = {
    one: "#03112C",
    two: "#061F48",
    three: "#F15B00",
    four: "#4D86BB"
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir={isRTL ? "rtl" : "ltr"}>
      
      {/* Hero Section */}
      <section className="relative py-32 text-white overflow-hidden" style={{ backgroundColor: colors.one }}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: colors.three }}></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ backgroundColor: colors.four }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-bold tracking-widest uppercase border"
              style={{ borderColor: colors.four, color: colors.four }}
            >
              {t("about.hero_badge")}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]"
            >
              {t("about.hero_title_1")} <span style={{ color: colors.three }}>{t("about.hero_title_accent")}</span> <br /> 
              {t("about.hero_title_2")} <span className="underline decoration-white/20">{t("about.hero_title_budget")}</span>
            </motion.h1>
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed max-w-2xl">
              {t("about.hero_description")}
            </p>
          </div>
        </div>
      </section>

   <section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16" data-aos="fade-up">
      <h2 className="text-4xl font-black mb-4" style={{ color: 'var(--color-one)' }}>
        {t("about.who_we_are.title")}
      </h2>
      <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: 'var(--color-three)' }}></div>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* About Us */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
        whileHover={{ scale: 1.03 }}
        data-aos="fade-right"
      >
        <div className="flex items-center mb-4 space-x-3">
          <div className="text-3xl text-blue-400">
            <i className="fas fa-info-circle"></i>
          </div>
          <h3 className="text-2xl font-bold" style={{ color: 'var(--color-two)' }}>
            {t("about.who_we_are.about_us.title")}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {t("about.who_we_are.about_us.desc")}
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
        whileHover={{ scale: 1.03 }}
        data-aos="fade-left"
      >
        <div className="flex items-center mb-4 space-x-3">
          <div className="text-3xl text-green-400">
            <i className="fas fa-eye"></i>
          </div>
          <h3 className="text-2xl font-bold" style={{ color: 'var(--color-two)' }}>
            {t("about.who_we_are.vision.title")}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {t("about.who_we_are.vision.desc")}
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
        whileHover={{ scale: 1.03 }}
        data-aos="fade-right"
      >
        <div className="flex items-center mb-4 space-x-3">
          <div className="text-3xl text-yellow-400">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3 className="text-2xl font-bold" style={{ color: 'var(--color-two)' }}>
            {t("about.who_we_are.mission.title")}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {t("about.who_we_are.mission.desc")}
        </p>
      </motion.div>

      {/* Values */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
        whileHover={{ scale: 1.03 }}
        data-aos="fade-left"
      >
        <div className="flex items-center mb-4 space-x-3">
          <div className="text-3xl text-red-400">
            <i className="fas fa-heart"></i>
          </div>
          <h3 className="text-2xl font-bold" style={{ color: 'var(--color-two)' }}>
            {t("about.who_we_are.values.title")}
          </h3>
        </div>
        <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
          {t("about.who_we_are.values.list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>

    </div>
  </div>
</section>


      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20" data-aos="zoom-in">
            <h2 className="text-4xl font-black mb-4" style={{ color: colors.one }}>{t("about.why_us_title")}</h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.three }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Clock />, key: "timing" },
              { icon: <Users />, key: "groups" },
              { icon: <MapPin />, key: "destinations" },
              { icon: <Star />, key: "transparency" }
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 hover:bg-gray-50 rounded-3xl transition-all">
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100" style={{ color: colors.four }}>
                  {feature.icon}
                </div>
                <h4 className="font-bold text-lg mb-3" style={{ color: colors.one }}>{t(`about.feature_${feature.key}_title`)}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`about.feature_${feature.key}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row items-center gap-10 overflow-hidden text-white" style={{ backgroundColor: colors.one }}>
            <div className="flex-1 z-10">
              <h3 className="text-3xl md:text-5xl font-black mb-6">
                {t("about.banner_title_1")} <br/> {t("about.banner_title_2")} <span style={{ color: colors.four }}>{t("about.banner_title_accent")}</span>
              </h3>
              <p className="text-lg opacity-70 mb-8">{t("about.banner_desc")}</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-lg" style={{ backgroundColor: colors.three }}>
                   {t("about.btn_book")} <ArrowRight size={20} className={isRTL ? "rotate-180" : ""}/>
                </button>
                <button className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all">
                   {t("about.btn_consult")}
                </button>
              </div>
            </div>

            <div className="flex-1 relative z-10 grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                    <span className="block text-3xl font-black" style={{ color: colors.three }}>100%</span>
                    <span className="text-xs uppercase opacity-60">{t("about.stat_safe")}</span>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center translate-y-8">
                    <span className="block text-3xl font-black" style={{ color: colors.four }}>-25%</span>
                    <span className="text-xs uppercase opacity-60">{t("about.stat_saving")}</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTravel;