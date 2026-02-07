import { useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar'
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Info from './pages/Info';
import Contact from './pages/Contact';
import About from './pages/About';
import { Scroll } from 'lucide-react';
import ScrollToTop from './ScrollToTop';
import Website from './pages/Website';
import UserFrom from './pages/UserFrom';

function App() {
  const { i18n } = useTranslation();

  // تحديث اتجاه الصفحة بناءً على اللغة (RTL للعربية و LTR للإنجليزية)
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <Router>
  <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        
        <Navbar />

        {/* main مع flex-grow: هذا هو السر! 
            سيقوم هذا الجزء بأخذ كل المساحة المتبقية ودفع الـ Footer للأسفل */}
        <main className="flex-grow pt-20 md:pt-24"> 
          <Routes>
            {/* الصفحة الرئيسية */}
            <Route path="/" element={
              <>
                <Home />
                <Info />
              </>
            } />
            
            {/* صفحة من نحن */}
            <Route path="/about" element={<About />} />

            {/* صفحة التواصل */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/carerer" element={<UserFrom />} />

            {/* صفحة الدعم */}
            <Route path="/website" element={
            <Website/>
            } />

            {/* صفحة الخطأ 404 */}
            <Route path="*" element={
              <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-black text-red-500">404</h1>
                <p className="text-xl mt-4">عذراً، الصفحة غير موجودة</p>
              </div>
            } />
          </Routes>
        </main>
        
        {/* الـ Footer سيظهر الآن دائماً بعد انتهاء المحتوى أو في أسفل الشاشة */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;