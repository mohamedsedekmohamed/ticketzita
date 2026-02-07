import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isRTL = i18n.language === 'ar';

  return (
    <footer className="bg-[#03112C] text-white pt-20 pb-10 px-6 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-black mb-6">
              Ticket<span className="text-[#F15B00]">zita</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, link: "#" },
                { icon: <Twitter size={18} />, link: "#" },
                { icon: <Instagram size={18} />, link: "#" },
                { icon: <Linkedin size={18} />, link: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#F15B00] hover:border-[#F15B00] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-bold mb-6 border-[#F15B00] ${isRTL ? 'border-r-4 pr-3' : 'border-l-4 pl-3'}`}>
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#F15B00] transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-[#F15B00] transition-colors">{t('footer.intl_trips')}</a></li>
              <li><a href="#" className="hover:text-[#F15B00] transition-colors">{t('footer.local_dest')}</a></li>
              <li><a href="#" className="hover:text-[#F15B00] transition-colors">{t('footer.faq')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className={`text-lg font-bold mb-6 border-[#F15B00] ${isRTL ? 'border-r-4 pr-3' : 'border-l-4 pl-3'}`}>
              {t('footer.support')}
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#F15B00] transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-[#F15B00] transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-[#F15B00] transition-colors">{t('footer.help_center')}</a></li>
              <li><a href="#" className="hover:text-[#F15B00] transition-colors">{t('footer.contact_us')}</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`text-lg font-bold mb-6 border-[#F15B00] ${isRTL ? 'border-r-4 pr-3' : 'border-l-4 pl-3'}`}>
              {t('footer.newsletter_title')}
            </h4>
            <p className="text-sm text-gray-400 mb-4">{t('footer.newsletter_desc')}</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder={t('footer.email_placeholder')}
                className="w-full bg-gray-800 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-[#F15B00] outline-none"
              />
              <button className={`absolute top-1.5 bg-[#F15B00] text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:brightness-110 transition-all ${isRTL ? 'left-2' : 'right-2'}`}>
                {t('footer.send')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Ticketzita. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
               <MapPin size={16} className="text-[#F15B00]" /> {t('footer.location')}
            </span>
            <span className="flex items-center gap-2">
               <Phone size={16} className="text-[#F15B00]" /> 19XXX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;