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



const CTA = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-10 transition-colors duration-300">
      <div className="max-w-[900px] mx-auto px-8 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Start building your app today
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          Join thousands of developers and businesses who trust Mobile App Bnao
          to build their apps. No credit card required.
        </p>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg transition">
          Get started
        </button>

      </div>
    </section>
  );
};

export default CTA;
