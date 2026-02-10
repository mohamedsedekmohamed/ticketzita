import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bus, Ticket, ArrowRight, Truck, CheckCircle2, MapPin, Globe } from "lucide-react";
import car from '../assets/car.jpeg'
import havey from '../assets/havey.jpeg'
import plan from '../assets/plan.jpeg'
import carr from '../assets/carr.jpeg'
import { useNavigate } from "react-router-dom";
const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
const navigator = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const servicesData = [
    { 
      key: "passenger_transport", 
      icon: <Bus size={32} />, 
      img: carr,
      featuresCount: 3,
      link:'https://ticket-hub.net/'
    },
    { 
      key: "cargo_transport", 
      icon: <Truck size={32} />, 
      img: havey,
      featuresCount: 4,
      link:'/contact'
    },
    { 
      key: "domestic_tourism", 
      icon: <MapPin size={32} />, 
            img: car,
 link:'https://ticket-hub.net/',
      featuresCount: 3
    },
    { 
      key: "flight_booking", 
      icon: <Globe size={32} />, 
 img: plan,      featuresCount: 3,
 link:'https://tickethub-tours.com/',
    }
  ];

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="bg-[#020817] text-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
   <section className="relative min-h-screen flex items-center overflow-hidden px-4 pt-28">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#F15B00]/10 via-transparent to-black/40 pointer-events-none" />
  <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#F15B00]/20 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-[#F15B00]/10 rounded-full blur-3xl pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    
    {/* Text Content */}
    <div data-aos="fade-up" className="text-center lg:text-start">
      <span className="inline-block text-[#F15B00] font-bold tracking-widest uppercase text-sm mb-4 px-4 py-2 rounded-full bg-[#F15B00]/10">
        {t("services.badge")}
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-[#F15B00] bg-clip-text text-transparent">
        {t("services.hero_title")}
      </h1>

      <p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
        {t("services.hero_desc")}
      </p>

      <div className="flex justify-center lg:justify-start">
        <button
          onClick={() => {
    const section = document.getElementById("services-section");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
          className="
            group
            bg-[#F15B00]
            px-8 py-4
            rounded-2xl
            font-bold
            flex
            items-center
            gap-3
            hover:bg-[#d14f00]
            hover:scale-105
            active:scale-95
            transition-all
            duration-300
            shadow-xl
            shadow-[#F15B00]/30
          "
        >
          {t("services.hero_btn")}
          <ArrowRight
            size={20}
            className={`${isRTL ? "rotate-180" : ""} transition-transform duration-300 group-hover:translate-x-1`}
          />
        </button>
      </div>
    </div>

    {/* Visual Side */}
    <div
      data-aos="fade-left"
      className="relative flex justify-center lg:justify-end"
    >
      <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#F15B00]/20 to-black/40 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-6 left-6 w-20 h-20 border-2 border-[#F15B00]/40 rounded-2xl rotate-12" />
        <div className="absolute bottom-6 right-6 w-24 h-24 bg-[#F15B00]/20 rounded-full blur-xl" />

        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-[#F15B00]/20 flex items-center justify-center backdrop-blur-lg border border-[#F15B00]/40">
            🚍
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     

      {/* Services List */}
      {servicesData.map((service, i) => (
        <section   id="services-section"
 key={service.key} className={`py-24 px-6 ${i % 2 !== 0 ? 'bg-white/[0.02]' : ''}`}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className={i % 2 !== 0 ? "lg:order-2" : ""} data-aos="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#F15B00]/20 text-[#F15B00] rounded-lg">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-black">
                  {t(`services.${service.key}.title`)}
                </h2>
              </div>
              
              <p className="text-white/70 text-lg mb-8">
                {t(`services.${service.key}.desc`)}
              </p>

              <ul className="space-y-3 mb-10">
                {[...Array(service.featuresCount)].map((_, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#F15B00]" />
                    <span className="text-white/80">{t(`services.${service.key}.f${idx + 1}`)}</span>
                  </li>
                ))}
              </ul>

              <a href={service.link} className="border-2 border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition-all">
                {t(`services.${service.key}.btn_text`)}
              </a>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl" data-aos="zoom-in">
              <img src={service.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] to-transparent opacity-60" />
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-6" data-aos="fade-up">
          {t("services.cta_title")}
        </h2>
        <p className="text-white/60 text-xl mb-10" data-aos="fade-up">
          {t("services.cta_desc")}
        </p>
        <button onClick={()=>navigator("/contact")} className="bg-white text-black px-12 py-4 rounded-full font-black text-xl hover:scale-105 transition-all">
          {t("services.cta_btn")}

        </button>
      </section>
    </main>
  );
};

export default Services;