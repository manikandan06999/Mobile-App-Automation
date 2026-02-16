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
//     <section id="testimonials" className="bg-gray-50 py-28">
//       <div className="max-w-[1000px] mx-auto px-8 text-center">

//         {/* Header */}
//         <h2 className="text-4xl font-bold mb-4">
//           What Our Customers Say
//         </h2>
//         <p className="text-gray-600 text-lg mb-16">
//           Join thousands of satisfied developers and businesses
//         </p>

//         {/* Testimonial Card */}
//         <div className="relative bg-white rounded-3xl shadow-lg p-12">

//           {/* Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow"
//           >
//             <FaChevronLeft />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-3 rounded-full shadow"
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
//           <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
//             "{testimonials[current].text}"
//           </p>

//           {/* Profile */}
//           <div className="flex items-center justify-center gap-4">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
//               {testimonials[current].name.charAt(0)}
//             </div>
//             <div className="text-left">
//               <h4 className="font-semibold">
//                 {testimonials[current].name}
//               </h4>
//               <p className="text-sm text-gray-500">
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
//                   ? "w-6 bg-blue-600"
//                   : "w-2 bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Stats Row */}
//         <div className="grid md:grid-cols-3 gap-12 mt-20 text-center">
//           <div>
//             <h3 className="text-4xl font-bold">100+</h3>
//             <p className="text-gray-600 mt-2">Happy developers</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold">500+</h3>
//             <p className="text-gray-600 mt-2">Apps created</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold">1,000+</h3>
//             <p className="text-gray-600 mt-2">Builds generated</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "We converted our e-commerce website to native apps and saw a 40% increase in user engagement. The push notifications feature alone has been a game-changer.",
    name: "Michael Chen",
    role: "CEO, ShopEasy",
  },
  {
    text: "The automation tools made our deployment process seamless. We now launch updates 3x faster than before.",
    name: "Sarah Johnson",
    role: "Founder, TechStore",
  },
  {
    text: "Amazing platform! The AI assistant helped configure everything in minutes without any coding.",
    name: "David Lee",
    role: "CTO, Webify",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="bg-gray-50 dark:bg-gray-950 py-28 transition-colors duration-300"
    >
      <div className="max-w-[1000px] mx-auto px-8 text-center">

        {/* Header */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          What Our Customers Say
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-lg mb-16">
          Join thousands of satisfied developers and businesses
        </p>

        {/* Testimonial Card */}
        <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg dark:shadow-none border border-transparent dark:border-gray-800 p-12 transition-colors duration-300">

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-full shadow transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-full shadow transition"
          >
            <FaChevronRight />
          </button>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Text */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            "{testimonials[current].text}"
          </p>

          {/* Profile */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {testimonials[current].name.charAt(0)}
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[current].role}
              </p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-6 bg-blue-600 dark:bg-blue-500"
                  : "w-2 bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-12 mt-20 text-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
              100+
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Happy developers
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
              500+
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Apps created
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
              1,000+
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Builds generated
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
