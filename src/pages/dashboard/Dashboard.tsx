import { FaPlus, FaSearch, } from "react-icons/fa";
import { FiBell, FiCreditCard, FiKey, FiSettings, FiCode } from "react-icons/fi";
import logo from "@/assets/images/mablogo.png";
import DashboardFooter from "./DashboardFooter";


const Dashboard = () => {
  return (
  <div id="dashboard" className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 transition-colors duration-300">

    {/* CONTENT AREA */}
    <div className="flex flex-1">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col">
        
        <div>
          <div className="p-6 border-b dark:border-gray-800">
            <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10" />
            </a>
          </div>

          <div className="p-6 space-y-4 text-sm">
            <p className="text-xs text-gray-400 uppercase">Dashboard</p>

            <button className="w-full flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Apps
            </button>

            <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
              <FiBell /> Notifications
            </button>

            <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
              <FiCreditCard /> Billing
            </button>

            <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
              <FiKey /> API Keys
            </button>

            <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
              <FiSettings /> Settings
            </button>

            <p className="text-xs text-gray-400 uppercase mt-6">Documents</p>

            <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
              <FiCode /> API
            </button>
          </div>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 flex flex-col">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Apps
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Create and manage your applications
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition">
            <FaPlus />
            Create App
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-16">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search apps by name or URL..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 dark:text-white"
          />
        </div>

       {/* App List Section */}
<div className="flex-1 space-y-6">

  {/* APP CARD */}
  <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-xl shadow-sm p-6 flex gap-6 items-center transition">

    {/* LEFT IMAGE */}
    <div className="w-72 h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
      <img
        src="/assets/sample-app.jpg" // replace with your image
        alt="App Preview"
        className="w-full h-full object-cover"
      />
    </div>

    {/* CENTER CONTENT */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        Bottle Ecommerce - React Native Mobile Expo App
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Software Version: iOS 12–15, Android 12+
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded">
          JavaScript
        </span>
        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded">
          React Native
        </span>
        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded">
          Expo
        </span>
      </div>
    </div>

    {/* RIGHT SIDE */}
<div className="text-right flex flex-col justify-between h-40">

  <div>
    <p className="text-2xl font-bold text-gray-900 dark:text-white">
      1 Token
    </p>
    <p className="text-xs text-gray-500 dark:text-gray-400">
      16 Sales
    </p>
  </div>

  {/* Buttons Row */}
  <div className="flex gap-3 justify-end mt-4">
    <button className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      Create App
    </button>

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
      Live Preview
    </button>
  </div>

</div>


  </div>

</div>


      </main>
    </div>

    {/* FOOTER ALWAYS AT BOTTOM */}
    <DashboardFooter />
  </div>
);

  
};

export default Dashboard;
