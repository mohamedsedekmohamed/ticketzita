import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // التأثير الحركي 'smooth' يجعل الصعود ناعماً، 
    // لكن 'instant' أو 'auto' هو المتبع في المواقع الكبرى لسرعة الاستجابة
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]); // يتم التنفيذ كلما تغير المسار

  return null; // هذا المكون لا يرسم شيئاً في الواجهة
};

export default ScrollToTop;