import { FaMoon, FaSun } from "react-icons/fa";
import { FiLogOut, FiChevronDown } from "react-icons/fi";
import { useState, useEffect } from "react";

const DashboardFooter = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
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

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full h-16 bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-6 py-3 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-6">

        {/* Flag */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition">
          <img
            src="https://flagcdn.com/us.svg"
            alt="US"
            className="w-5 h-4 rounded-sm"
          />
          <FiChevronDown />
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="hover:text-red-500 transition flex items-center gap-1"
        >
          <FiLogOut />
        </button>
      </div>

      {/* CENTER */}
      <div>
        All Rights Reserved © {currentYear}
      </div>

      {/* RIGHT SIDE */}
      <button
        onClick={toggleDarkMode}
        className="hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

    </div>
  );
};

export default DashboardFooter;
