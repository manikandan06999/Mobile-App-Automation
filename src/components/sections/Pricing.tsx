// import { FaCheck, FaTimes } from "react-icons/fa";

// const Pricing = () => {
//   return (
//     <section id="pricing" className="bg-gray-50 py-28">
//       <div className="max-w-[1200px] mx-auto px-8 lg:px-16 text-center">

//         {/* Header */}
//         <h2 className="text-4xl font-bold mb-4">
//           Simple, transparent pricing
//         </h2>
//         <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
//           Choose the perfect plan for your needs. All plans include core
//           features with different build credit allocations.
//         </p>

//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {/* FREE PLAN */}
//           <div className="bg-white rounded-2xl shadow-md p-8 text-left">
//             <h3 className="text-xl font-semibold mb-6 text-center">
//               Free
//             </h3>

//             <h4 className="text-4xl font-bold mb-6 text-center">
//               Free
//             </h4>

//             <ul className="space-y-4 mb-8 text-sm">
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 10 build credits
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 Access to single builder
//               </li>
//               <li className="flex items-center gap-3 text-gray-400">
//                 <FaTimes className="text-red-400" />
//                 Custom CSS/JS injection
//               </li>
//               <li className="flex items-center gap-3 text-gray-400">
//                 <FaTimes className="text-red-400" />
//                 API Access
//               </li>
//               <li className="flex items-center gap-3 text-gray-400">
//                 <FaTimes className="text-red-400" />
//                 Hosted pages
//               </li>
//               <li className="flex items-center gap-3 text-gray-400">
//                 <FaTimes className="text-red-400" />
//                 AI Chat Assistant
//               </li>
//               <li className="flex items-center gap-3 text-gray-400">
//                 <FaTimes className="text-red-400" />
//                 24/7 support
//               </li>
//             </ul>

//             <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-medium">
//               Start Free
//             </button>
//           </div>

//           {/* PRO PLAN */}
//           <div className="relative bg-white rounded-2xl border-2 border-blue-600 shadow-xl p-8 text-left scale-105">

//             {/* Badge */}
//             <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
//               Most Popular
//             </span>

//             <h3 className="text-xl font-semibold mb-6 text-center">
//               Pro
//             </h3>

//             <h4 className="text-4xl font-bold mb-6 text-center">
//               $29.00 <span className="text-base font-normal text-gray-500">/month</span>
//             </h4>

//             <ul className="space-y-4 mb-8 text-sm">
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 50 build credits
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 Access to single builder
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 Custom CSS/JS injection
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 API Access
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 5 hosted pages per app
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 500,000 AI tokens/month
//               </li>
//               <li className="flex items-center gap-3 text-gray-400">
//                 <FaTimes className="text-red-400" />
//                 24/7 support
//               </li>
//             </ul>

//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium shadow-lg transition">
//               Go Pro
//             </button>
//           </div>

//           {/* ENTERPRISE PLAN */}
//           <div className="bg-white rounded-2xl shadow-md p-8 text-left">
//             <h3 className="text-xl font-semibold mb-6 text-center">
//               Enterprise
//             </h3>

//             <h4 className="text-4xl font-bold mb-6 text-center">
//               $99.00 <span className="text-base font-normal text-gray-500">/month</span>
//             </h4>

//             <ul className="space-y-4 mb-8 text-sm">
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 Unlimited build credits
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 Access to all active builders
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 Custom CSS/JS injection
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 API Access
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 Unlimited hosted pages
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 Unlimited AI Chat
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheck className="text-green-500" />
//                 24/7 support
//               </li>
//             </ul>

//             <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-medium">
//               Get Enterprise
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


import { FaCheck, FaTimes } from "react-icons/fa";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-gray-50 dark:bg-gray-950 py-28 transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 text-center">

        {/* Header */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Simple, transparent pricing
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include core
          features with different build credit allocations.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* FREE PLAN */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md dark:shadow-none border border-transparent dark:border-gray-800 p-8 text-left transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
              Free
            </h3>

            <h4 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Free
            </h4>

            <ul className="space-y-4 mb-8 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                10 build credits
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                Access to single builder
              </li>
              <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                <FaTimes className="text-red-400" />
                Custom CSS/JS injection
              </li>
              <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                <FaTimes className="text-red-400" />
                API Access
              </li>
              <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                <FaTimes className="text-red-400" />
                Hosted pages
              </li>
              <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                <FaTimes className="text-red-400" />
                AI Chat Assistant
              </li>
              <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                <FaTimes className="text-red-400" />
                24/7 support
              </li>
            </ul>

            <button className="w-full bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition">
              Start Free
            </button>
          </div>

          {/* PRO PLAN */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-600 dark:border-blue-500 shadow-xl dark:shadow-none p-8 text-left scale-105 transition-colors duration-300">

            {/* Badge */}
            <span className="absolute -top-3 right-6 bg-blue-600 dark:bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
              Pro
            </h3>

            <h4 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              $29.00{" "}
              <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </h4>

            <ul className="space-y-4 mb-8 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                50 build credits
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                Access to single builder
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                Custom CSS/JS injection
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                API Access
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                5 hosted pages per app
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                500,000 AI tokens/month
              </li>
              <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500">
                <FaTimes className="text-red-400" />
                24/7 support
              </li>
            </ul>

            <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded-xl font-medium shadow-lg transition">
              Go Pro
            </button>
          </div>

          {/* ENTERPRISE PLAN */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md dark:shadow-none border border-transparent dark:border-gray-800 p-8 text-left transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
              Enterprise
            </h3>

            <h4 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              $99.00{" "}
              <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </h4>

            <ul className="space-y-4 mb-8 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                Unlimited build credits
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                Access to all active builders
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                Custom CSS/JS injection
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                API Access
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                Unlimited hosted pages
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                Unlimited AI Chat
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-500" />
                24/7 support
              </li>
            </ul>

            <button className="w-full bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition">
              Get Enterprise
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
