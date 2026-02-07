import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR }
};

i18n
  .use(LanguageDetector) // لاكتشاف لغة المتصفح تلقائياً
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar', // اللغة الاحتياطية
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;