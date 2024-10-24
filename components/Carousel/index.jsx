import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = ["/1.jpg", "/2.jpg", "/3.jpg"];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = isHovered
      ? null
      : setInterval(() => {
          setCurrentSlide(
            (prevSlide) => (prevSlide + 1) % carouselImages.length
          );
        }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselImages.length) % carouselImages.length
    );
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  };

  // Add event listener for keyboard navigation
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      className="relative h-[calc(100vh-80px)] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Image Carousel"
    >
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
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 text-purple-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full right-4 top-1/2"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 text-purple-800" />
      </button>

      {/* Indicators */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-purple-800" : "bg-white opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
