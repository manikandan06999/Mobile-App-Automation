import { Link } from "react-router-dom";
import logo from "@/assets/images/mablogo.png";

const Sidebar = () => {
//   const location = useLocation();

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800">

      <div className="p-6 border-b dark:border-gray-800">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      <div className="p-6 space-y-4 text-sm">

        <p className="text-xs text-gray-400 uppercase">Dashboard</p>

        <Link to="/dashboard/main">Main Dashboard</Link>

        <Link to="/dashboard/apps">Create My App</Link>

       <Link to="/dashboard/records">App Record</Link>

       <Link to="/dashboard/tokens">Tokens</Link>

        <Link to="/billing">
          <button className="w-full px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            Billing
          </button>
        </Link>

      </div>
    </aside>
  );
};

export default Sidebar;