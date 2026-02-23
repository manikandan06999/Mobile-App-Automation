import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FiHome,
  FiPlusCircle,
  FiLayers,
  FiKey,
  FiCreditCard,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import logo from "@/assets/images/mablogo.png";
import DashboardFooter from "./DashboardFooter";
import { NavLink } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [tokens, setTokens] = useState(0);
  const API = "http://localhost:8001/api";

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch(`${API}/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          navigate("/login");
          return;
        }

        const data = await res.json();

        setTokens(data.availableTokens);

        // ✅ STORE AFTER FETCH
        localStorage.setItem(
          "tokens",
          String(data.availableTokens)
        );

      } catch (err) {
        console.error("Dashboard fetch error:", err);
        navigate("/login");
      }
    };

    fetchDashboard();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("tokens");
    navigate("/login");
  };

 return (
  <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">

    <div className="flex flex-1">

      {/* SIDEBAR */}
<aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col">

  {/* Logo */}
  <div className="p-6 border-b dark:border-gray-800">
    <a href="/" className="flex items-center gap-2">
      <img src={logo} alt="Logo" className="h-10" />
    </a>
  </div>

  {/* Navigation */}
  <div className="flex-1 p-6 space-y-2 text-sm">

    <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
      Dashboard
    </p>

    {/* Main Dashboard */}
    <NavLink to="/dashboard/main" end
  className={({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white shadow-sm"
         : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
     }`
  }
>
     
        <FiHome className="text-lg" />
        Dashboard Overview
    
    </NavLink>

    {/* Create App */}
    <NavLink
  to="/dashboard"
  end
  className={({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white shadow-sm"
         : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
     }`
  }
>
  <FiPlusCircle className="text-lg" />
  Create App
</NavLink>

    {/* App Records */}
    <NavLink to="/dashboard/records" 
    end
  className={({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white shadow-sm"
         : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
     }`
  }
>
  <FiLayers className="text-lg" />
  App Records
</NavLink>

    {/* Tokens */}
    <NavLink to="/dashboard/tokens"
    end
  className={({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
      ${
        isActive
          ? "bg-blue-600 text-white shadow-sm"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      }`
  }
>
  <FiKey className="text-lg" />
  Tokens
</NavLink>

    {/* Billing */}
    <NavLink to="/dashboard/billing"
    end
  className={({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
      ${
        isActive
          ? "bg-blue-600 text-white shadow-sm"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      }`
  }
>
  <FiCreditCard className="text-lg" />
  Billing
</NavLink>

    <p className="text-xs text-gray-400 uppercase tracking-wider mt-6 mb-3">
      Account
    </p>

    {/* Profile */}
    <NavLink to="/dashboard/profile"
    end
  className={({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white shadow-sm"
         : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
     }`
  }
>
  <FiUser className="text-lg" />
  Profile
</NavLink>

    {/* Settings */}
    <NavLink to="/dashboard/settings"
    end
  className={({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white shadow-sm"
         : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
     }`
  }
>
  <FiSettings className="text-lg" />
  Settings
</NavLink>

  </div>

  {/* Logout */}
  {/* <div className="p-6 border-t dark:border-gray-800">
    <button
      onClick={logout}
      className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
    >
      <FiLogOut />
      Logout
    </button>
  </div> */}

</aside>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="flex justify-between items-center p-5 pb-0">
          <div>
            <p className="text-sm text-gray-500">Tokens</p>
            <p className="text-xl font-bold text-blue-600">
              {tokens}
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FiLogOut /> Logout
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div className="flex-1 p-10 pt-6">
          <Outlet />
        </div>

      </div>
    </div>

    {/* FOOTER */}
    <DashboardFooter />

  </div>
);
};

export default DashboardLayout;