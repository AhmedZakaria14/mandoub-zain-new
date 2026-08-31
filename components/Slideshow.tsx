'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_IMAGE_PATH } from '@/lib/config';

const homeImages = [
  { src: BRAND_IMAGE_PATH, alt: "مندوب شركة زين الرياض اتصل 0534768368 لتركيب وتأسيس 5G والألياف" },
  { src: "/images/slideshow/1_s3knrl.webp", alt: "راوتر زين 5G المنزلي باللون الأبيض مع إنترنت سريع" },
  { src: "/images/slideshow/2_ivbo98.webp", alt: "زين تتصدر سرعة الإنترنت الثابت وتغطية 5G في المملكة" },
  { src: "/images/slideshow/3_d2uvsg.webp", alt: "شبكة زين 5G الأفضل في الرياض بأقوى تغطية وأعلى سرعة" },
  { src: "/images/slideshow/4_mve8v4.webp", alt: "راوتر وشريحة زين 5G للإنترنت المنزلي سريع التأسيس" },
  { src: "/images/slideshow/5_l2sdhh.webp", alt: "باقات زين Speed Net 5G غير المحدودة للمنزل" }
];

export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
    }, 4500); // 4.5 seconds delay
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[300px] md:min-h-[500px] flex items-center justify-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-800/50 overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={homeImages[currentIndex].src}
          alt={homeImages[currentIndex].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-auto object-cover max-h-[600px] group-hover:scale-105 transition-transform duration-[20s]"
        />
      </AnimatePresence>
      
      {/* Pagination indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 z-10 p-2 bg-black/20 rounded-full backdrop-blur-md">
        {homeImages.map((_, idx) => (
           <button
             key={idx}
             onClick={() => setCurrentIndex(idx)}
             className="focus:outline-none px-1"
             aria-label={`عرض الصورة رقم ${idx + 1}`}
           >
             <div 
               className={`transition-all duration-300 rounded-full ${
                 idx === currentIndex ? 'bg-brand-primary w-8 h-2' : 'bg-white/70 hover:bg-white w-2 h-2'
               }`}
             />
           </button>
        ))}
      </div>
    </div>
  );
}
