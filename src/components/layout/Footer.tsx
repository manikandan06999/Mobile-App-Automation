import logo from "@/assets/images/mablogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">

      <div className="max-w-[900px] max-h-[200px] mx-auto px-8 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
           <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-14  object-contain"
          />
          </a>
        </div>
        

        {/* Tagline */}
       <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">

          Build native apps from your website in minutes.
          Professional app builder with no coding required.
        </p>

        {/* Policy Links */}
        <div className="flex justify-center gap-8 text-gray-600 text-sm mb-6">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition">
            Cookie Policy
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          © {currentYear}. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
