import { useEffect, useState } from "react";
import { FiUsers, FiCreditCard } from "react-icons/fi";

interface User {
  id: number;
  name: string;
  email: string;
  tokens: number;
  role: string;
}

const Admin = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTokens: 0,
  });

  const token = localStorage.getItem("token");

  /* 🔐 Protect Admin Route */
  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
      return;
    }

    const payload = JSON.parse(atob(token.split(".")[1]));

    if (payload.role !== "admin") {
      window.location.href = "/";
    }
  }, []);

  /* 📊 Fetch Stats */
  const fetchStats = async () => {
    const res = await fetch("http://localhost:8001/api/admin/stats", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setStats(data);
  };

  /* 👥 Fetch Users */
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8001/api/admin/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchStats();
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-10">

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Admin Panel
      </h1>

      {/* 📊 Stats */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <FiUsers className="text-3xl text-blue-600" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
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
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Tokens
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.totalTokens}
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* 👥 Users Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 overflow-x-auto">

        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Users
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="py-3">Name</th>
              <th className="py-3">Email</th>
              <th className="py-3">Tokens</th>
              <th className="py-3">Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="py-3">{user.name}</td>
                <td className="py-3">{user.email}</td>
                <td className="py-3 text-blue-600 font-semibold">
                  {user.tokens}
                </td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
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
    </div>
  );
};

export default Admin;