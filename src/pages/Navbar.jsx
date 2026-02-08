import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY < 21);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'website', path: '/website' },
    { name: 'Carerer', path: '/carerer' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 px-4 md:px-12 py-4 ${
        isScrolled || isMenuOpen 
          ? 'bg-[#03112C]/90 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10' 
          : 'bg-gradient-to-b from-[#03112C]/80 to-transparent py-5' 
          /* التدرج العلوي يضمن ظهور النص حتى لو الخلفية بيضاء */
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer relative z-50">
          <div className="w-10 h-10 bg-[#F15B00] rounded-xl flex items-center justify-center shadow-lg shadow-[#F15B00]/40 transform group-hover:scale-110 transition-all">
            <span className="text-white font-black text-xl">T</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white drop-shadow-md">
            Ticket<span className='text-[#F15B00]'>zita</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-[#03112C]/40 p-1.5 rounded-full border border-white/20 backdrop-blur-md">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                location.pathname === item.path 
                  ? 'bg-[#F15B00] text-white shadow-orange-500/50 shadow-md' 
                  : 'text-white hover:text-[#F15B00] hover:bg-white/5'
              }`}
            >
              {t(`nav.${item.name}`)}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 relative z-50">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#03112C]/60 border border-white/30 text-white hover:bg-[#F15B00] hover:border-[#F15B00] transition-all font-bold text-xs"
          >
            <span className="text-base">🌐</span>
            {i18n.language === 'ar' ? 'English' : 'العربية'}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-3 bg-[#03112C]/60 rounded-xl border border-white/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-[#F15B00] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 w-full h-screen bg-[#03112C] transition-all duration-500 flex flex-col justify-center items-center gap-8 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            onClick={() => setIsMenuOpen(false)} 
            className={`text-4xl font-black transition-colors ${
              location.pathname === item.path ? 'text-[#F15B00]' : 'text-white'
            }`}
          >
            {t(`nav.${item.name}`)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;