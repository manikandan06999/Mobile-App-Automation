// import logo from "@/assets/images/mablogo.png";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">

//       <div className="max-w-[900px] max-h-[200px] mx-auto px-8 text-center">

//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//            <a href="/" className="flex items-center">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-14  object-contain"
//           />
//           </a>
//         </div>
        

//         {/* Tagline */}
//        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">

//           Build native apps from your website in minutes.
//           Professional app builder with no coding required.
//         </p>

//         {/* Policy Links */}
//         <div className="flex justify-center gap-8 text-gray-600 text-sm mb-6">
//           <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition">
//             Terms of Service
//           </a>
//           <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition">
//             Cookie Policy
//           </a>
//         </div>

//         {/* Copyright */}
//         <p className="text-gray-500 dark:text-gray-500 text-sm">
//           © {currentYear}. All Rights Reserved.
//         </p>

//       </div>
//     </footer>
//   );
// };

// export default Footer;


import logo from "@/assets/images/mablogo.png";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">

      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Column 1 - Brand */}
          <div>
            <a href="/" className="inline-block mb-6">
              <img src={logo} alt="Logo" className="h-12 object-contain" />
            </a>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Build native mobile apps from your website in minutes.
              Powerful automation. Zero coding. Instant deployment.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Company
            </h4>

            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <a href="#features" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Features
              </a>
              <a href="#pricing" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Pricing
              </a>
              <a href="#testimonials" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Testimonials
              </a>
              <a href="/dashboard" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Dashboard
              </a>
            </div>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Legal
            </h4>

            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <a href="#" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Terms of Service
              </a>
              <a href="#" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Cookie Policy
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-500 text-center md:text-left">
            © {currentYear} Mobile App Bnao. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-gray-500 dark:text-gray-400 text-lg">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
