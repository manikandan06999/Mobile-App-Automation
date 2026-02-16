import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import screen1 from "@/assets/images/gallery/screen1.png";
import screen2 from "@/assets/images/gallery/screen2.png";
import screen3 from "@/assets/images/gallery/screen3.png";
import screen4 from "@/assets/images/gallery/screen4.png";
import screen5 from "@/assets/images/gallery/screen5.png";
import screen6 from "@/assets/images/gallery/screen6.png";
import screen7 from "@/assets/images/gallery/screen7.png";
import screen8 from "@/assets/images/gallery/screen8.png";

const images = [
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  screen7,
  screen8,
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = 4;

  const nextSlide = () => {
    if (currentIndex < images.length - visibleImages) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      id="gallery"
      className="bg-white dark:bg-gray-950 py-28 transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Explore every screen
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Over 50 beautifully crafted screens for a complete experience.
        </p>

        {/* Slider Wrapper */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-800 p-3 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition z-10"
          >
            <FaChevronLeft />
          </button>

          {/* Images Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-1/4 px-3 flex-shrink-0"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-900 hover:scale-105 transition duration-300">
                    <img
                      src={img}
                      alt={`screen-${index}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-800 p-3 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition z-10"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
