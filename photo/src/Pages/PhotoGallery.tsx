import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/pexels-remove.png";
import image2 from "../assets/pexels.jpg";

const images = [image1, image1, image2, image1, image1, image1, image1];

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // for slide direction

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="rounded-xl object-cover w-full h-64 cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeModal}
              className="absolute cursor-pointer top-4 right-6 text-white text-4xl font-bold"
            >
              &times;
            </button>

            <button
              onClick={prevImage}
              className="absolute cursor-pointer left-4 text-white text-5xl font-bold hover:text-gray-300"
            >
              &#8592;
            </button>

            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Enlarged ${currentIndex}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-4xl max-h-[80vh] rounded-xl shadow-lg"
            />

            <button
              onClick={nextImage}
              className="absolute cursor-pointer right-4 text-white text-5xl font-bold hover:text-gray-300"
            >
              &#8594;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
