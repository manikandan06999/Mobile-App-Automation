// import { useEffect, useState } from "react";
// import { FiUsers, FiCreditCard } from "react-icons/fi";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";


// interface User {
//   id: number;
//   name: string;
//   email: string;
//   tokens: number;
//   role: string;
// }

// const AdminDashboard = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalTokens: 0,
//   });
//   const [chartData, setChartData] = useState<any[]>([]);

//   const token = localStorage.getItem("token");
//   const payload = JSON.parse(atob(token!.split(".")[1]));

// const fetchChart = async () => {
//   const res = await fetch(
//     "http://localhost:8001/api/admin/revenue-chart",
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   const data = await res.json();
//   setChartData(data);
// };

// fetchChart();

//   useEffect(() => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     window.location.href = "/login";
//     return;
//   }

//   try {
//     const payload = JSON.parse(
//       atob(token.split(".")[1])
//     );

//     if (payload.role !== "admin") {
//       window.location.href = "/dashboard";
//     }

//   } catch (err) {
//     console.error("Invalid token");
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   }

// }, []);

// // if (payload.role !== "admin") {
// //   window.location.href = "/";
// // }
//   /* ---------------- FETCH STATS ---------------- */
//   const fetchStats = async () => {
//     const res = await fetch("http://localhost:8001/api/admin/stats", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const data = await res.json();
//     setStats(data);
//   };

//   /* ---------------- FETCH USERS ---------------- */
//   const fetchUsers = async () => {
//     const res = await fetch("http://localhost:8001/api/admin/users", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const data = await res.json();
//     setUsers(data);
//   };

//   useEffect(() => {
//     fetchStats();
//     fetchUsers();
//   }, []);
  


//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-10">

//       <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
//         Admin Dashboard
//       </h1>

//       {/* ---------------- STATS CARDS ---------------- */}
//       <div className="grid md:grid-cols-2 gap-6 mb-10">

//         <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
//           <div className="flex items-center gap-4">
//             <FiUsers className="text-3xl text-blue-600" />
//             <div>
//               <p className="text-gray-500 dark:text-gray-400 text-sm">
//                 Total Users
//               </p>
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
//                 {stats.totalUsers}
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
//           <div className="flex items-center gap-4">
//             <FiCreditCard className="text-3xl text-green-600" />
//             <div>
//               <p className="text-gray-500 dark:text-gray-400 text-sm">
//                 Total Tokens
//               </p>
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
//                 {stats.totalTokens}
//               </h2>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* ---------------- USERS TABLE ---------------- */}
//       <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 overflow-x-auto">

//         <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//           Users
//         </h2>

//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="border-b dark:border-gray-700">
//               <th className="py-3 text-gray-600 dark:text-gray-400">Name</th>
//               <th className="py-3 text-gray-600 dark:text-gray-400">Email</th>
//               <th className="py-3 text-gray-600 dark:text-gray-400">Tokens</th>
//               <th className="py-3 text-gray-600 dark:text-gray-400">Role</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map((user) => (
//               <tr
//                 key={user.id}
//                 className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
//               >
//                 <td className="py-3 text-gray-900 dark:text-white">
//                   {user.name}
//                 </td>
//                 <td className="py-3 text-gray-900 dark:text-white">
//                   {user.email}
//                 </td>
//                 <td className="py-3 text-blue-600 font-semibold">
//                   {user.tokens}
//                 </td>
//                 <td className="py-3">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium ${
//                       user.role === "admin"
//                         ? "bg-red-100 text-red-600"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {user.role}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import { useEffect, useState } from "react";
import { FiUsers, FiCreditCard } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";


interface User {
  id: number;
  name: string;
  email: string;
  tokens: number;
  role: string;
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTokens: 0,
    totalRevenue: 0,
  });
  const [chartData, setChartData] = useState<any[]>([]);

  const token = localStorage.getItem("token");

  /* ---------------- AUTH CHECK ---------------- */
  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      if (payload.role !== "admin") {
        window.location.href = "/dashboard";
      }
    } catch {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  }, []);

  /* ---------------- FETCH ALL DATA ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [statsRes, usersRes, chartRes] = await Promise.all([
          fetch("http://localhost:8001/api/admin/stats", { headers }),
          fetch("http://localhost:8001/api/admin/users", { headers }),
          fetch("http://localhost:8001/api/admin/revenue-chart", { headers }),
        ]);

        const statsData = await statsRes.json();
        const usersData = await usersRes.json();
        const chartData = await chartRes.json();

        setStats(statsData);
        setUsers(usersData);
        setChartData(chartData);

      } catch (error) {
        console.error("Admin fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

      {/* ---------------- STATS CARDS ---------------- */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <FiUsers className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Total Users
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.totalUsers}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <FiCreditCard className="text-3xl text-green-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Total Tokens
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.totalTokens}
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <FiCreditCard className="text-3xl text-green-600" />
            <div >
  <p className="text-gray-500">Total Revenue</p>
  <h2 className="text-2xl font-bold text-green-600">
    ₹{stats.totalRevenue}
  </h2>
</div>
          </div>
        </div>
        

      </div>
      {/* ---------------- USERS TABLE ---------------- */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 overflow-x-auto">

        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Users
        </h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="py-3 text-gray-600 dark:text-gray-400">Name</th>
              <th className="py-3 text-gray-600 dark:text-gray-400">Email</th>
              <th className="py-3 text-gray-600 dark:text-gray-400">Tokens</th>
              <th className="py-3 text-gray-600 dark:text-gray-400">Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="py-3 text-gray-900 dark:text-white">
                  {user.name}
                </td>
                <td className="py-3 text-gray-900 dark:text-white">
                  {user.email}
                </td>
                <td className="py-3 text-blue-600 font-semibold">
                  {user.tokens}
                </td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.role === "admin"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      {/* ---------------- REVENUE CHART ---------------- */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          Monthly Revenue 📈
        </h2>

        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      



    </div>
  );
};

export default AdminDashboard;
