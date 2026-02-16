// const steps = [
//   {
//     id: 1,
//     title: "Enter Your Category",
//     description:
//       "Choose a category for your app. This helps users find your app more easily.",
//     color: "bg-blue-100 text-blue-600",
//   },
//   {
//     id: 2,
//     title: "Enter Your URL",
//     description:
//       "Paste your website URL and we'll automatically analyze it to get you started quickly.",
//     color: "bg-purple-100 text-purple-600",
//   },
//   {
//     id: 3,
//     title: "Build Your App",
//     description:
//       "One-click build with our distributed system. Get native builds in minutes.",
//     color: "bg-green-100 text-green-600",
//   },
//   {
//     id: 4,
//     title: "Download & Publish",
//     description:
//       "Download your app or scan QR code to test. Ready for app store publishing.",
//     color: "bg-orange-100 text-orange-600",
//   },
// ];

// const HowItWorks = () => {
//   return (
//    <section id="how-it-works" className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6 text-center">
        
//         {/* Title */}
//         <h2 className="text-4xl font-bold mb-4">How It Works</h2>
//         <p className="text-gray-600 mb-16 text-lg">
//           Build your mobile app in 4 simple steps
//         </p>

//         {/* Steps */}
//         <div className="relative grid md:grid-cols-4 gap-10">

//           {/* Horizontal Line */}
//           <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-blue-200"></div>

//           {steps.map((step) => (
//             <div key={step.id} className="relative flex flex-col items-center text-center">

//               {/* Step Number */}
//               <div className="relative z-10 mb-6">
//                 <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600 text-white text-xl font-bold shadow-lg">
//                   {step.id}
//                 </div>
//               </div>

//               {/* Icon Circle */}
//               <div
//                 className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${step.color}`}
//               >
//                 <span className="text-2xl">🔗</span>
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-3">
//                 {step.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



const steps = [
  {
    id: 1,
    title: "Enter Your Category",
    description:
      "Choose a category for your app. This helps users find your app more easily.",
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
  },
  {
    id: 2,
    title: "Enter Your URL",
    description:
      "Paste your website URL and we'll automatically analyze it to get you started quickly.",
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
  },
  {
    id: 3,
    title: "Build Your App",
    description:
      "One-click build with our distributed system. Get native builds in minutes.",
    color:
      "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400",
  },
  {
    id: 4,
    title: "Download & Publish",
    description:
      "Download your app or scan QR code to test. Ready for app store publishing.",
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          How It Works
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-16 text-lg">
          Build your mobile app in 4 simple steps
        </p>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-10">

          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-blue-200 dark:bg-blue-800"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >

              {/* Step Number */}
              <div className="relative z-10 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600 dark:bg-blue-500 text-white text-xl font-bold shadow-lg">
                  {step.id}
                </div>
              </div>

              {/* Icon Circle */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${step.color}`}
              >
                <span className="text-2xl">🔗</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
