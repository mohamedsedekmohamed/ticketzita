import React, { useEffect } from "react";
import { MapPin, Phone, Mail, Send, Clock, MessageSquare, Sparkles, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const colors = {
    dark: "#03112C",
    accent: "#F15B00",
    blue: "#4D86BB",
    glass: "rgba(255, 255, 255, 0.03)",
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#020917] text-white overflow-hidden font-sans" dir={isRTL ? "rtl" : "ltr"}>
      
      {/* --- Background Ambient Effects --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F15B00]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4D86BB]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="max-w-4xl mb-20" data-aos="fade-down">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mb-6"
          >
            <Sparkles size={16} className="text-[#F15B00]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{t("contact.hero.badge")}</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
            {t("contact.hero.title_part1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15B00] to-[#ff8c42]">
               {t("contact.hero.title_part2")}
            </span>
          </h1>
        </div>

        {/* --- The Bento Grid --- */}
        <div className="grid lg:grid-cols-12 grid-rows-none gap-6">
          
          {/* Main Form - spans 7 columns */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden group"
            data-aos="fade-right"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-2 flex items-center gap-3">
                <MessageSquare className="text-[#F15B00]" /> {t("contact.form.title")}
              </h3>
              <p className="text-white/50 mb-10 max-w-md">{t("contact.form.desc")}</p>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="text" required className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#F15B00] transition-all peer" placeholder=" " />
                    <label className="absolute top-4 left-0 text-white/30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F15B00] peer-valid:-top-4 peer-valid:text-xs">
                      {t("contact.form.name_label")}
                    </label>
                  </div>
                  <div className="relative group">
                    <input type="email" required className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#F15B00] transition-all peer" placeholder=" " />
                    <label className="absolute top-4 left-0 text-white/30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F15B00] peer-valid:-top-4 peer-valid:text-xs">
                      {t("contact.form.email_label")}
                    </label>
                  </div>
                </div>
                
                <div className="relative group">
                  <textarea rows="4" required className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#F15B00] transition-all peer resize-none" placeholder=" "></textarea>
                  <label className="absolute top-4 left-0 text-white/30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F15B00] peer-valid:-top-4 peer-valid:text-xs">
                    {t("contact.form.msg_label")}
                  </label>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-[#F15B00] px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(241,91,0,0.4)]"
                >
                  <span className="relative z-10">{t("contact.form.submit_btn")}</span>
                  <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </motion.button>
              </form>
            </div>
            {/* Decorative element */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#F15B00]/10 rounded-full blur-[80px] group-hover:bg-[#F15B00]/20 transition-all"></div>
          </motion.div>

          {/* Contact Methods - Spans 5 columns */}
          <div className="lg:col-span-5 grid gap-6">
            
            {/* Call Card */}
            <motion.div 
              whileHover={{ x: isRTL ? -10 : 10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F15B00]/10 flex items-center justify-center text-[#F15B00] group-hover:bg-[#F15B00] group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t("contact.info.call")}</p>
                  <p className="text-xl font-black">+20 127 619 6600</p>
                </div>
              </div>
              <ExternalLink size={20} className="text-white/20 group-hover:text-white" />
            </motion.div>

            {/* Email Card */}
            <motion.div 
              whileHover={{ x: isRTL ? -10 : 10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#4D86BB]/10 flex items-center justify-center text-[#4D86BB] group-hover:bg-[#4D86BB] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t("contact.info.email")}</p>
                  <p className="text-xl font-black italic">support@ticketzita.com</p>
                </div>
              </div>
              <ExternalLink size={20} className="text-white/20 group-hover:text-white" />
            </motion.div>

            {/* Support Hours Bento Box */}
            <div className="bg-[#061F48] p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
              <div className="relative z-10">
                <Clock className="text-[#F15B00] mb-4" size={32} />
                <h4 className="text-2xl font-black mb-2">{t("contact.info.support_title")}</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{t("contact.info.support_desc")}</p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#F15B00] animate-bounce" style={{animationDelay: `${i*0.2}s`}}></div>)}
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#F15B00]">{t("contact.info.status")}</span>
                </div>
              </div>
              <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-[#F15B00]/20 rounded-full blur-3xl"></div>
            </div>

          </div>
        </div>

        {/* --- Full Width Map Bento Box --- */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mt-6 bg-white/5 border border-white/10 rounded-[3rem] p-4 h-[500px] relative group overflow-hidden"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456!2d31.234567!3d30.044444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTQnMDQuNCJF!5e0!3m2!1sen!2seg!4v123456789" 
            className="w-full h-full rounded-[2.5rem] grayscale invert opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
          
          <div className="absolute bottom-10 left-10 right-10 flex flex-wrap gap-4 pointer-events-none">
             <div className="bg-black/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex items-center gap-4">
                <MapPin className="text-[#F15B00]" />
                <div>
                   <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">{t("contact.map.label")}</p>
                   <p className="text-sm font-bold">{t("contact.map.city")}</p>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;