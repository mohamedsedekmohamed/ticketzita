import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bus, Ticket, ArrowRight, Truck, CheckCircle2, MapPin, Globe } from "lucide-react";
import car from '../assets/car.jpeg'
import havey from '../assets/havey.jpeg'
import plan from '../assets/plan.jpeg'
import carr from '../assets/carr.jpeg'
const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const servicesData = [
    { 
      key: "passenger_transport", 
      icon: <Bus size={32} />, 
      img: car,
      featuresCount: 3
    },
    { 
      key: "cargo_transport", 
      icon: <Truck size={32} />, 
      img: havey,
      featuresCount: 4
    },
    { 
      key: "domestic_tourism", 
      icon: <MapPin size={32} />, 
            img: carr,

      featuresCount: 3
    },
    { 
      key: "flight_booking", 
      icon: <Globe size={32} />, 
 img: plan,      featuresCount: 3
    }
  ];

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="bg-[#020817] text-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative px-6 pt-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#F15B00]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div data-aos="fade-up">
            <span className="text-[#F15B00] font-bold tracking-widest uppercase text-sm mb-4 block">
              {t("services.badge")}
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              {t("services.hero_title")}
            </h1>
            <p className="text-white/60 text-lg mb-10 max-w-lg">
              {t("services.hero_desc")}
            </p>
            <button className="bg-[#F15B00] px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#d14f00] transition-all">
              {t("services.hero_btn")}
              <ArrowRight size={20} className={isRTL ? "rotate-180" : ""} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#F15B00] py-8">
        <div className="max-w-7xl mx-auto px-6  flex justify-around gap-8 text-center">
          <div><h4 className="font-black text-2xl">{t("services.stats.op")}</h4></div>
          {/* <div><h4 className="font-black text-2xl">{t("services.stats.gps")}</h4></div> */}
          <div><h4 className="font-black text-2xl">{t("services.stats.safety")}</h4></div>
          <div><h4 className="font-black text-2xl">{t("services.stats.iso")}</h4></div>
        </div>
      </div>

      {/* Services List */}
      {servicesData.map((service, i) => (
        <section key={service.key} className={`py-24 px-6 ${i % 2 !== 0 ? 'bg-white/[0.02]' : ''}`}>
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

              <button className="border-2 border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition-all">
                {t(`services.${service.key}.btn_text`)}
              </button>
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
        <button className="bg-white text-black px-12 py-4 rounded-full font-black text-xl hover:scale-105 transition-all">
          {t("services.cta_btn")}

        </button>
      </section>
    </main>
  );
};

export default Services;