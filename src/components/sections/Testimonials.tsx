

// import { useState } from "react";
// import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const testimonials = [
//   {
//     text: "We converted our e-commerce website to native apps and saw a 40% increase in user engagement. The push notifications feature alone has been a game-changer.",
//     name: "Michael Chen",
//     role: "CEO, ShopEasy",
//   },
//   {
//     text: "The automation tools made our deployment process seamless. We now launch updates 3x faster than before.",
//     name: "Sarah Johnson",
//     role: "Founder, TechStore",
//   },
//   {
//     text: "Amazing platform! The AI assistant helped configure everything in minutes without any coding.",
//     name: "David Lee",
//     role: "CTO, Webify",
//   },
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section
//       id="testimonials"
//       className="bg-gray-50 dark:bg-gray-950 py-28 transition-colors duration-300"
//     >
//       <div className="max-w-[1000px] mx-auto px-8 text-center">

//         {/* Header */}
//         <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//           What Our Customers Say
//         </h2>

//         <p className="text-gray-600 dark:text-gray-400 text-lg mb-16">
//           Join thousands of satisfied developers and businesses
//         </p>

//         {/* Testimonial Card */}
//         <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg dark:shadow-none border border-transparent dark:border-gray-800 p-12 transition-colors duration-300">

//           {/* Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-full shadow transition"
//           >
//             <FaChevronLeft />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-full shadow transition"
//           >
//             <FaChevronRight />
//           </button>

//           {/* Stars */}
//           <div className="flex justify-center gap-1 mb-6 text-yellow-400">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} />
//             ))}
//           </div>

//           {/* Text */}
//           <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
//             "{testimonials[current].text}"
//           </p>

//           {/* Profile */}
//           <div className="flex items-center justify-center gap-4">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
//               {testimonials[current].name.charAt(0)}
//             </div>
//             <div className="text-left">
//               <h4 className="font-semibold text-gray-900 dark:text-white">
//                 {testimonials[current].name}
//               </h4>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 {testimonials[current].role}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-3 mt-6">
//           {testimonials.map((_, index) => (
//             <div
//               key={index}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 current === index
//                   ? "w-6 bg-blue-600 dark:bg-blue-500"
//                   : "w-2 bg-gray-300 dark:bg-gray-700"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Stats Row */}
//         <div className="grid md:grid-cols-3 gap-12 mt-20 text-center">
//           <div>
//             <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
//               100+
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mt-2">
//               Happy developers
//             </p>
//           </div>

//           <div>
//             <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
//               500+
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mt-2">
//               Apps created
//             </p>
//           </div>

//           <div>
//             <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
//               1,000+
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mt-2">
//               Builds generated
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// const testimonials = [
//   {
//     text: "We converted our e-commerce website to native apps and saw a 40% increase in user engagement. The push notifications feature alone has been a game-changer.",
//     name: "Michael Chen",
//     role: "CEO, ShopEasy",
//   },
//   {
//     text: "The automation tools made our deployment process seamless. We now launch updates 3x faster than before.",
//     name: "Sarah Johnson",
//     role: "Founder, TechStore",
//   },
//   {
//     text: "Amazing platform! The AI assistant helped configure everything in minutes without any coding.",
//     name: "David Lee",
//     role: "CTO, Webify",
//   },
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section
//       id="testimonials"
//       className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300"
//     >
//       <div className="max-w-[1200px] mx-auto px-8 lg:px-16 grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <h2 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
//             Trusted by creators worldwide
//           </h2>

//           <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
//             Thousands of developers and businesses are building their apps with confidence using our automation platform.
//           </p>

//           {/* Arrows */}
//           <div className="flex gap-4">
//             <button
//               onClick={prevSlide}
//               className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow hover:scale-105 transition"
//             >
//               <FaChevronLeft />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow hover:scale-105 transition"
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* RIGHT TESTIMONIAL CARD */}
//         <div className="relative">

//           {/* Large Quote Icon */}
//           <FaQuoteRight className="absolute -top-6 -right-6 text-7xl text-blue-100 dark:text-blue-900 opacity-50" />

//           <div className="
//             relative
//             p-10
//             rounded-3xl
//             bg-white/70
//             dark:bg-gray-900/70
//             backdrop-blur-lg
//             border border-gray-200 dark:border-gray-800
//             shadow-xl
//             transition
//           ">

//             {/* Text */}
//             <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
//               "{testimonials[current].text}"
//             </p>

//             {/* User Info */}
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
//                 {testimonials[current].name.charAt(0)}
//               </div>

//               <div>
//                 <h4 className="font-semibold text-gray-900 dark:text-white">
//                   {testimonials[current].name}
//                 </h4>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   {testimonials[current].role}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Dots */}
//           <div className="flex gap-3 mt-8 justify-center">
//             {testimonials.map((_, index) => (
//               <div
//                 key={index}
//                 className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
//                   current === index
//                     ? "w-10 bg-blue-600"
//                     : "w-3 bg-gray-300 dark:bg-gray-700"
//                 }`}
//                 onClick={() => setCurrent(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Floating Background Glow */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-30 -z-10" />
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-30 -z-10" />
//     </section>
//   );
// };

// export default Testimonials;

// import { useEffect, useRef, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import gsap from "gsap";

// const testimonials = [
//   {
//     text: "We converted our website into native apps and increased engagement by 40%. The automation is incredible.",
//     name: "Michael Chen",
//     role: "CEO, ShopEasy",
//     rating: 5,
//   },
//   {
//     text: "Deployment is now 3x faster. The build system is seamless and reliable.",
//     name: "Sarah Johnson",
//     role: "Founder, TechStore",
//     rating: 5,
//   },
//   {
//     text: "The AI assistant configured everything in minutes without coding.",
//     name: "David Lee",
//     role: "CTO, Webify",
//     rating: 5,
//   },
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const startX = useRef(0);

//   // 🔥 GSAP Smooth Transition
//   useEffect(() => {
//     if (cardRef.current) {
//       gsap.fromTo(
//         cardRef.current,
//         { y: 40, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
//       );
//     }
//   }, [current]);

//   const nextReview = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   // 🖱 Drag Swipe
//   const handleMouseDown = (e: React.MouseEvent) => {
//     startX.current = e.clientX;
//   };

//   const handleMouseUp = (e: React.MouseEvent) => {
//     const diff = e.clientX - startX.current;
//     if (diff > 100) {
//       setCurrent((prev) =>
//         prev === 0 ? testimonials.length - 1 : prev - 1
//       );
//     } else if (diff < -100) {
//       nextReview();
//     }
//   };

//   return (
//     <section className="relative py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300">

//       {/* Background Blur Glow */}
//       <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 dark:bg-blue-800 rounded-full blur-3xl opacity-20" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 dark:bg-purple-800 rounded-full blur-3xl opacity-20" />

//       <div className="max-w-[900px] mx-auto px-8 text-center relative z-10">

//         <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-16">
//           What Builders Say
//         </h2>

//         {/* CARD */}
//         <div
//           ref={cardRef}
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           className="
//             relative
//             p-12
//             rounded-3xl
//             bg-white dark:bg-gray-900
//             border border-gray-200 dark:border-gray-800
//             shadow-2xl
//             cursor-grab
//             transition
//             overflow-hidden
//           "
//         >
//           {/* Glowing Border Animation */}
//           <div className="absolute inset-0 rounded-3xl pointer-events-none animate-glow border-2 border-blue-500/30" />

//           {/* Animated Stars */}
//           <div className="flex justify-center gap-2 mb-6">
//             {[...Array(testimonials[current].rating)].map((_, i) => (
//               <FaStar
//                 key={i}
//                 className="text-yellow-400 animate-star"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               />
//             ))}
//           </div>

//           {/* Text */}
//           <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
//             "{testimonials[current].text}"
//           </p>

//           {/* Profile */}
//           <div>
//             <h4 className="font-semibold text-gray-900 dark:text-white">
//               {testimonials[current].name}
//             </h4>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               {testimonials[current].role}
//             </p>
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={nextReview}
//             className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
//           >
//             Next Review
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import { useEffect, useRef, useState } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

const testimonials = [
  {
    text: "We converted our website into native apps and increased engagement by 40%. The automation is incredible.",
    name: "Michael Chen",
    role: "CEO, ShopEasy",
    rating: 5,
  },
  {
    text: "Deployment is now 3x faster. The build system is seamless and reliable.",
    name: "Sarah Johnson",
    role: "Founder, TechStore",
    rating: 5,
  },
  {
    text: "The AI assistant configured everything in minutes without coding.",
    name: "David Lee",
    role: "CTO, Webify",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const direction = useRef<"left" | "right">("right");

  const changeSlide = (dir: "left" | "right") => {
    direction.current = dir;

    if (!cardRef.current) return;

    // Exit animation
    gsap.to(cardRef.current, {
      x: dir === "right" ? -100 : 100,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setCurrent((prev) =>
          dir === "right"
            ? (prev + 1) % testimonials.length
            : prev === 0
            ? testimonials.length - 1
            : prev - 1
        );
      },
    });
  };

  // Entry animation
  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        x: direction.current === "right" ? 100 : -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, [current]);

  return (
    <section id="testimonials" className="relative py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 dark:bg-blue-800 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 dark:bg-purple-800 rounded-full blur-3xl opacity-20" />

      <div className="max-w-[900px] mx-auto px-8 text-center relative z-10">

        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-16">
          What Builders Say
        </h2>

        {/* Slider Wrapper */}
        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={() => changeSlide("left")}
            className="
              absolute -left-16
              w-14 h-14
              flex items-center justify-center
              rounded-full
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-lg
              hover:scale-110
              transition
            "
          >
            <FaArrowLeft className="text-gray-700 dark:text-gray-300" />
          </button>

          {/* Card */}
          <div
            ref={cardRef}
            className="
              relative
              w-full
              p-12
              rounded-3xl
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-2xl
              overflow-hidden
            "
          >
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none animate-glow border-2 border-blue-500/30" />

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <FaStar
                  key={i}
                  className="text-yellow-400 animate-star"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              "{testimonials[current].text}"
            </p>

            {/* Profile */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => changeSlide("right")}
            className="
              absolute -right-16
              w-14 h-14
              flex items-center justify-center
              rounded-full
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-800
              shadow-lg
              hover:scale-110
              transition
            "
          >
            <FaArrowRight className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
