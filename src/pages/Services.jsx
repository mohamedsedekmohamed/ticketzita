import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bus, Map, Ticket, Star, Shield, Clock, ArrowRight, Globe } from "lucide-react";
import logo from '../assets/Logo.jpeg'
const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    AOS.init({ 
      duration: 900, 
      once: true, 
      easing: "ease-out-back" 
    });
  }, []);

  // مصفوفة الخدمات مع الروابط الخاصة بك
  const servicesData = [
    { 
      key: "transport", 
      icon: <Bus size={40} />, 
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
      link: "https://ticket-hub.net/",
      color: "#F15B00"
    },
    { 
      key: "tours", 
      icon: <Globe size={40} />, 
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021",
      link: "https://tickethub-tours.com/",
      color: "#4D86BB"
    },
    { 
      key: "tickets", 
      icon: <Ticket size={40} />, 
      img: logo,
      link: "https://ticket-hub.net/",
      color: "#F15B00"
    }
  ];

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="bg-[#020817] text-white selection:bg-[#F15B00]/30 font-sans">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#F15B00]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#4D86BB]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-up">
            <span className="inline-block py-2 px-5 rounded-full bg-white/5 border border-white/10 text-[#F15B00] text-sm font-bold mb-6 backdrop-blur-md">
              {t("services.badge")}
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              {t("services.hero_title")}
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              {t("services.hero_desc")}
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}
              className="group bg-[#F15B00] px-10 py-5 rounded-2xl font-black hover:scale-105 hover:shadow-[0_0_30px_-5px_#F15B00] transition-all flex items-center gap-3"
            >
              {t("services.hero_btn")}
              <ArrowRight size={20} className={`${isRTL ? "rotate-180" : ""} group-hover:translate-x-1 transition-transform`} />
            </button>
          </div>

          <div data-aos="zoom-out-left" className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F15B00] to-[#4D86BB] rounded-[3rem] blur opacity-20 transition duration-1000"></div>
            <div className="relative h-[550px] rounded-[3rem] bg-[#0A192F] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071" 
                alt="Travel" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-black mb-6 italic">
            {t("services.why_title")}
          </h2>
          <div data-aos="fade-up" className="w-24 h-1.5 bg-[#F15B00] mx-auto mb-8 rounded-full" />
          <p data-aos="fade-up" className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("services.why_desc")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Star />, key: "quality" },
            { icon: <Shield />, key: "safety" },
            { icon: <Clock />, key: "time" }
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-12 hover:bg-white/[0.04] hover:border-[#F15B00]/40 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F15B00]/10 text-[#F15B00] flex items-center justify-center mb-8 group-hover:bg-[#F15B00] group-hover:text-white transition-all duration-500 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-[#F15B00] transition-colors uppercase tracking-tight">
                {t(`services.why.${item.key}.title`)}
              </h3>
              <p className="text-white/50 leading-relaxed text-lg">
                {t(`services.why.${item.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Service Sections */}
      {servicesData.map((service, i) => (
        <section 
          key={service.key} 
          className={`py-32 px-6 relative overflow-hidden ${i % 2 !== 0 ? 'bg-white/[0.01]' : ''}`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            {/* Content Side */}
            <div 
              className={i % 2 !== 0 ? "lg:order-2" : ""} 
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="inline-flex items-center gap-4 text-[#F15B00] font-bold mb-6 tracking-[0.2em] uppercase text-sm">
                <span className="w-12 h-[2px] bg-[#F15B00]" />
                {t(`services.${service.key}.badge`)}
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                {t(`services.${service.key}.title`)}
              </h2>
              <p className="text-white/70 leading-relaxed text-xl mb-10">
                {t(`services.${service.key}.desc`)}
              </p>
              
              <a 
                href={service.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-[#020817] px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#F15B00] hover:text-white transition-all duration-300 shadow-xl group"
              >
                {t(`services.${service.key}.btn_text`)}
                <ArrowRight size={22} className={`${isRTL ? "rotate-180" : ""} group-hover:translate-x-2 transition-transform`} />
              </a>
            </div>

            {/* Image Side */}
            <div 
              data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
              className="relative h-[500px] rounded-[3.5rem] overflow-hidden group shadow-2xl border border-white/5"
            >
              <div className="absolute inset-0 bg-[#03112C]/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src={service.img} 
                alt={service.key} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" 
              />
              <div className="absolute bottom-8 right-8 z-20 p-5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl text-white shadow-2xl">
                {service.icon}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-40 px-6 relative text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F15B00]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 data-aos="zoom-in" className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">
            {t("services.cta_title")}
          </h2>
          <p data-aos="zoom-in" data-aos-delay="100" className="text-white/60 text-xl md:text-2xl mb-12 font-light">
            {t("services.cta_desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
            <a 
              href="https://ticket-hub.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F15B00] text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(241,91,0,0.3)]"
            >
              {t("services.transport.btn_text")}
            </a>
            <a 
              href="https://tickethub-tours.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-black transition-all"
            >
              {t("services.tours.btn_text")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;