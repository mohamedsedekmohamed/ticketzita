import React, { useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="min-h-screen bg-[#020917] text-white overflow-hidden font-sans"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F15B00]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4D86BB]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20" data-aos="fade-down">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mb-6"
          >
            <Sparkles size={16} className="text-[#F15B00]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              {t("contact.hero.badge")}
            </span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
            {t("contact.hero.title_part1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15B00] to-[#ff8c42]">
              {t("contact.hero.title_part2")}
            </span>
          </h1>
        </div>

  <div className="grid lg:grid-cols-12 grid-rows-none gap-6">
          {/* Main Form - spans 7 columns */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden group"
            data-aos="fade-right"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-2 flex items-center gap-3">
                <MessageSquare className="text-[#F15B00]" />{" "}
                {t("contact.form.title")}
              </h3>
              <p className="text-white/50 mb-10 max-w-md">
                {t("contact.form.desc")}
              </p>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* الاسم */}
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#F15B00] transition-all peer"
                      placeholder=" "
                    />
                    <label className="absolute top-4 left-0 text-white/30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F15B00] peer-valid:-top-4 peer-valid:text-xs">
                      {t("contact.form.name_label")}
                    </label>
                  </div>

                  {/* الإيميل */}
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#F15B00] transition-all peer"
                      placeholder=" "
                    />
                    <label className="absolute top-4 left-0 text-white/30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F15B00] peer-valid:-top-4 peer-valid:text-xs">
                      {t("contact.form.email_label")}
                    </label>
                  </div>

                  {/* رقم الهاتف */}
                  <div className="relative group">
                   <input
  required
  type="number"
  className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#F15B00] transition-all peer
             [appearance:textfield] 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none"
  placeholder=" "
/>

                    <label className="absolute top-4 left-0 text-white/30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F15B00] peer-valid:-top-4 peer-valid:text-xs">
                      {t("contact.form.phone_label") || "رقم الهاتف"}
                    </label>
                  </div>

                  {/* نوع الطلب */}
                  <div className="relative group">
                  <select
  required
  defaultValue=""
  className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#F15B00] transition-all peer text-white"
>
  <option
    value=""
    disabled
    className="bg-[#03112C] text-gray-400"
  >
    {t("contact.form.service_placeholder")}
  </option>

  <option value="trips" className="bg-[#03112C] text-white">
    {t("contact.form.service_trips")}
  </option>

  <option value="heavy_transport" className="bg-[#03112C] text-white">
    {t("contact.form.service_heavy")}
  </option>

  <option value="tickets" className="bg-[#03112C] text-white">
    {t("contact.form.service_tickets")}
  </option>
</select>


                    <label className="absolute -top-4 left-0 text-xs text-[#F15B00] pointer-events-none transition-all">
                      {t("contact.form.service_label") || "نوع الخدمة"}
                    </label>
                  </div>
                </div>

                {/* الرسالة */}
                <div className="relative group">
                  <textarea
                    rows="4"
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#F15B00] transition-all peer resize-none"
                    placeholder=" "
                  />
                  <label className="absolute top-4 left-0 text-white/30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#F15B00] peer-valid:-top-4 peer-valid:text-xs">
                    {t("contact.form.msg_label")}
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-[#F15B00] px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(241,91,0,0.4)]"
                >
                  <span className="relative z-10">
                    {t("contact.form.submit_btn")}
                  </span>
                  <Send
                    size={18}
                    className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </motion.button>
              </form>
            </div>
            {/* Decorative element */}
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#F15B00]/10 rounded-full blur-[80px] group-hover:bg-[#F15B00]/20 transition-all"></div>
          </motion.div>

          {/* Contact Methods - Spans 5 columns */}
     <div className="lg:col-span-5 flex flex-col gap-6">
  {/* Cairo Branch Card */}
  <motion.div 
    whileHover={{ x: isRTL ? -10 : 10 }}
    className="group relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] overflow-hidden transition-all hover:border-[#4D86BB]/50 shadow-xl"
  >
    <div className="flex items-start gap-6 relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-[#4D86BB]/10 flex items-center justify-center text-[#4D86BB] group-hover:bg-[#4D86BB] group-hover:text-white transition-all duration-500 shadow-inner">
        <MapPin size={28} />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-[#4D86BB] uppercase tracking-widest mb-1">
          {t('footer.cairo')}
        </h4>
        <div className="space-y-1">
          <a href="tel:0224505007" className="block text-2xl font-black hover:text-[#4D86BB] transition-colors">
            02 2450 5007
          </a>
          <a href="tel:01144442121" className="block text-2xl font-black hover:text-[#4D86BB] transition-colors">
            011 4444 2121
          </a>
        </div>
      </div>
    </div>
    {/* خلفية جمالية خفيفة */}
    <div className="absolute -right-4 -bottom-4 opacity-5 text-[#4D86BB]">
       <MapPin size={100} />
    </div>
  </motion.div>

  {/* Suez Branch Card */}
  <motion.div 
    whileHover={{ x: isRTL ? -10 : 10 }}
    className="group relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] overflow-hidden transition-all hover:border-[#F15B00]/50 shadow-xl"
  >
    <div className="flex items-start gap-6 relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-[#F15B00]/10 flex items-center justify-center text-[#F15B00] group-hover:bg-[#F15B00] group-hover:text-white transition-all duration-500 shadow-inner">
        <MapPin size={28} />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-[#F15B00] uppercase tracking-widest mb-1">
          {t('footer.suez')}
        </h4>
        <div className="space-y-1">
          <a href="tel:01144445151" className="block text-2xl font-black hover:text-[#F15B00] transition-colors">
            011 4444 5151
          </a>
          <a href="tel:0623522225" className="block text-2xl font-black hover:text-[#F15B00] transition-colors">
            062 3522 225
          </a>
        </div>
      </div>
    </div>
    {/* خلفية جمالية خفيفة */}
    <div className="absolute -right-4 -bottom-4 opacity-5 text-[#F15B00]">
       <MapPin size={100} />
    </div>
  </motion.div>

  {/* Email Card */}
  <motion.div 
    whileHover={{ x: isRTL ? -10 : 10 }}
    className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex items-center justify-between group cursor-pointer"
  >
    <div className="flex items-center gap-6">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all">
        <Mail size={24} />
      </div>
      <div>
        <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t("contact.info.email")}</p>
        <p className="text-xl font-black italic">support@ticketzita.com</p>
      </div>
    </div>
  </motion.div>

  {/* Support Hours Bento Box */}
  <div className="bg-[#061F48] p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group flex-grow">
    <div className="relative z-10">
      <Clock className="text-[#F15B00] mb-4" size={32} />
      <h4 className="text-2xl font-black mb-2">{t("contact.info.support_title")}</h4>
      <p className="text-white/50 text-sm leading-relaxed mb-6">{t("contact.info.support_desc")}</p>
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#F15B00] animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
        <span className="text-xs font-black uppercase tracking-widest text-[#F15B00]">{t("contact.info.status")}</span>
      </div>
    </div>
    <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-[#F15B00]/20 rounded-full blur-3xl"></div>
  </div>
</div>
        </div>

        {/* --- Double Maps Section --- */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Cairo Map */}
          <motion.div data-aos="zoom-in" className="relative h-[400px] bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.983!2d31.332!3d30.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzM2LjAiTiAzMcKwMTknNTUuMiJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
              className="w-full h-full grayscale invert opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} allowFullScreen="" loading="lazy"
            ></iframe>
            <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <span className="text-xs font-black text-[#4D86BB]">{t('footer.cairo')}</span>
            </div>
          </motion.div>

          {/* Suez Map */}
          <motion.div data-aos="zoom-in" data-aos-delay="100" className="relative h-[400px] bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5!2d32.5!3d29.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU0JzAwLjAiTiAzMsKwMzAnMDAuMCJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
              className="w-full h-full grayscale invert opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} allowFullScreen="" loading="lazy"
            ></iframe>
            <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <span className="text-xs font-black text-[#F15B00]">{t('footer.suez')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;