// import {
//   FaAirbnb,
//   FaGoogle,
//   FaMicrosoft,
//   FaSpotify,
//   FaMailchimp,
// } from "react-icons/fa";

// const TrustedCompanies = () => {
//   return (
//     <div className="bg-gray-100 py-24">
//       <div className="max-w-[1200px] mx-auto px-8 lg:px-16 text-center">

//         {/* Heading */}
//         <h3 className="text-4xl font-bold mb-16 text-gray-900">
//           You'll be in good company
//         </h3>

//         {/* Logos Row */}
//         <div className="flex flex-wrap justify-center items-center gap-20 text-gray-500">

//           <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
//             <FaAirbnb size={32} />
//             <span>airbnb</span>
//           </div>

//           <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
//             <FaGoogle size={32} />
//             <span>Google</span>
//           </div>

//           <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
//             <FaMicrosoft size={32} />
//             <span>Microsoft</span>
//           </div>

//           <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
//             <FaSpotify size={32} />
//             <span>Spotify</span>
//           </div>

//           <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
//             <FaMailchimp size={32} />
//             <span>mailchimp</span>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrustedCompanies;


import {
  FaAirbnb,
  FaGoogle,
  FaMicrosoft,
  FaSpotify,
  FaMailchimp,
} from "react-icons/fa";

const TrustedCompanies = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 text-center">

        {/* Heading */}
        <h3 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white">
          You'll be in good company
        </h3>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-20 text-gray-500 dark:text-gray-400">

          <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
            <FaAirbnb size={32} />
            <span>airbnb</span>
          </div>

          <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
            <FaGoogle size={32} />
            <span>Google</span>
          </div>

          <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
            <FaMicrosoft size={32} />
            <span>Microsoft</span>
          </div>

          <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
            <FaSpotify size={32} />
            <span>Spotify</span>
          </div>

          <div className="flex items-center gap-3 text-2xl font-semibold opacity-70 hover:opacity-100 transition">
            <FaMailchimp size={32} />
            <span>mailchimp</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
