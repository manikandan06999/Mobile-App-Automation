// const CTA = () => {
//   return (
//     <section className="bg-gray-50 py-10">
//       <div className="max-w-[900px] max-h-[200px] mx-auto px-8 text-center">

//         {/* Heading */}
//         <h2 className="text-4xl font-bold mb-6 text-gray-900">
//           Start building your app today
//         </h2>

//         {/* Subtext */}
//         <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//           Join thousands of developers and businesses who trust Appy
//           to build their apps. No credit card required.
//         </p>

//         {/* Button */}
//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg transition">
//           Get started free
//         </button>

//       </div>
//     </section>
//   );
// };

// export default CTA;



// const CTA = () => {
//   return (
//     <section className="bg-gray-50 dark:bg-gray-950 py-10 transition-colors duration-300">
//       <div className="max-w-[900px] mx-auto px-8 text-center">

//         {/* Heading */}
//         <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//           Start building your app today
//         </h2>

//         {/* Subtext */}
//         <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
//           Join thousands of developers and businesses who trust Mobile App Bnao
//           to build their apps. No credit card required.
//         </p>

//         {/* Button */}
//         <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-7 py-3.5 rounded-xl font-medium shadow-lg transition">
//           Get started 
//         </a>

//       </div>
//     </section>
//   );
// };

// export default CTA;


const CTA = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-white dark:bg-black transition-colors duration-500">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-black opacity-40" />

      {/* Glow Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 dark:opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 dark:opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">

        {/* Big Number Style Highlight */}
        <h2 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Start building your app today
        </h2>

        {/* Subtext */}
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of developers and businesses who trust Mobile App Bnao
          to build their apps. No credit card required.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="/dashboard"
            className="
              px-8 py-4 rounded-full font-semibold text-white
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-700 hover:to-purple-700
              shadow-xl hover:shadow-2xl
              transition-all duration-300
            "
          >
            Get Started
          </a>

          <a
            href="#features"
            className="
              px-8 py-4 rounded-full font-semibold
              border border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-all duration-300
            "
          >
            Learn More
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTA;
