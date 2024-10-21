import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = ["/1.jpg", "/2.jpg", "/3.jpg"];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <section className="relative h-[calc(100vh-80px)] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full"
        >
          <img
            src={carouselImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay with Welcome Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Welcome to IBWTECH</h1>
          <p className="mb-8 text-xl">International Business Work</p>
          <button className="px-6 py-3 text-white transition-colors bg-purple-600 rounded-full hover:bg-purple-700">
            Learn More
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full left-4 top-1/2"
      >
        <ChevronLeft className="w-6 h-6 text-purple-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full right-4 top-1/2"
      >
        <ChevronRight className="w-6 h-6 text-purple-800" />
      </button>
    </section>
  );
}
