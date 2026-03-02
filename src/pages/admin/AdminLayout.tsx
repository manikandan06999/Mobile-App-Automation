import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { useEffect } from "react";
import {
  FiHome,
  FiUsers,
  FiCreditCard,
  FiBarChart2,
  FiLogOut,
} from "react-icons/fi";
import logo from "@/assets/images/mablogo.png";
import DashboardFooter from "@/pages/dashboard/DashboardFooter";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const payload = JSON.parse(
        atob(token.split(".")[1])
      );

      if (payload.role !== "admin") {
        navigate("/dashboard");
      }

    } catch {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">

      <div className="flex flex-1">

        {/* SIDEBAR */}
        <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col">

          <div className="p-6 border-b dark:border-gray-800">
            <img src={logo} alt="Logo" className="h-10" />
          </div>

          <div className="flex-1 p-6 space-y-2 text-sm">

            <p className="text-xs text-gray-400 uppercase mb-3">
              Admin Panel
            </p>

            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <FiHome /> Dashboard
            </NavLink>

            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <FiUsers /> Users
            </NavLink>

            <NavLink
              to="/admin/payments"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <FiCreditCard /> Payments
            </NavLink>

            <NavLink
              to="/admin/analytics"
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <FiBarChart2 /> Analytics
            </NavLink>

          </div>

        </aside>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col">

          {/* HEADER */}
          <div className="flex justify-between items-center p-6">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard 👑
            </h1>

            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FiLogOut /> Logout
            </button>
          </div>

          {/* PAGE CONTENT */}
          <div className="flex-1 p-10 pt-4">
            <Outlet />
          </div>

        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default AdminLayout;
