// // import { useEffect, useState } from "react";

// // const Navbar = () => {
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <nav
// //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
// //         scrolled
// //           ? "bg-white/70 backdrop-blur-md shadow-md"
// //           : "bg-transparent"
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
// //         {/* Logo */}
// //         <div className="text-2xl font-bold text-blue-600">
// //           Appy
// //         </div>

// //         {/* Nav Links */}
// //         <div className="hidden md:flex gap-8 text-gray-700 font-medium">
// //           <a href="#how-it-works" className="hover:text-blue-600 transition">
// //             How It Works
// //           </a>
// //           <a href="#" className="hover:text-blue-600 transition">
// //             Features
// //           </a>
// //           <a href="#" className="hover:text-blue-600 transition">
// //             Pricing
// //           </a>
// //           <a href="#" className="hover:text-blue-600 transition">
// //             Testimonials
// //           </a>
// //         </div>

// //         {/* Right Button */}
// //         <button className="text-gray-700 font-medium hover:text-blue-600 transition">
// //           Dashboard
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { FiChevronDown } from "react-icons/fi";
// import logo from "@/assets/images/mablogo.png";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
// useEffect(() => {
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "dark") {
//     document.documentElement.classList.add("dark");
//     setDarkMode(true);
//   }
// }, []);

// const toggleDarkMode = () => {
//   if (darkMode) {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   } else {
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   }
//   setDarkMode(!darkMode);
// };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/80 backdrop-blur-md shadow-sm"
//           : "bg-white/60 backdrop-blur-sm"
//       }`}
//     >
//       <div className="max-w-[1200px] mx-auto px-8 lg:px-16 py-4 flex items-center justify-between">

//         {/* LEFT LOGO */}
//       <a href="/" className="flex items-center">
//   <img
//     src={logo}
//     alt="Mobile App Bnao Logo"
//     className="h-10 object-contain"
//   />
// </a>

//         {/* CENTER NAV */}
//         <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
//           <a href="#how-it-works" className="hover:text-blue-600 transition">
//             How It Works
//           </a>
//           <a href="#features" className="hover:text-blue-600 transition">
//             Features
//           </a>
//           <a href="#pricing" className="hover:text-blue-600 transition">
//             Pricing
//           </a>
//           <a href="#testimonials" className="hover:text-blue-600 transition">
//             Testimonials
//           </a>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-6">

//           {/* Flag */}
//           <div className="flex items-center gap-1 cursor-pointer">
//             <img
//               src="https://flagcdn.com/us.svg"
//               alt="US"
//               className="w-5 h-4 rounded-sm"
//             />
//             <FiChevronDown className="text-gray-500 text-sm" />
//           </div>

//           {/* Moon Icon */}
//           <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-600 transition">
//   {darkMode ? <FaSun /> : <FaMoon />}
// </button>

//           {/* Dashboard */}
//           <button className="text-gray-700 font-medium hover:text-blue-600 transition">
//             Dashboard
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import logo from "@/assets/images/mablogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
        // Check login
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);
  

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 py-4 flex items-center justify-between">

        {/* LEFT LOGO */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Mobile App Bnao Logo"
            className="h-10 object-contain"
          />
        </a>

        {/* CENTER NAV */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700 dark:text-gray-300">
          <a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            How It Works
          </a>
          <a href="#info" className="hover:text-blue-600 transition">
  Info
</a>
          <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Features
          </a>
          <a
  href="#gallery"
  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
>
  Gallery
</a>
          <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Testimonials
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* Flag */}
          <div className="flex items-center gap-1 cursor-pointer">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US"
              className="w-5 h-4 rounded-sm"
            />
            <FiChevronDown className="text-gray-500 dark:text-gray-400 text-sm" />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-yellow-400 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

            {/* Auth Buttons */}
          {isLoggedIn ? (
            <a
              href="/dashboard"
              className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Dashboard
            </a>
          ) : (
            <>
              <a
                href="/login"
                className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Login
              </a>

              <a
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
              >
                Get Started
              </a>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
