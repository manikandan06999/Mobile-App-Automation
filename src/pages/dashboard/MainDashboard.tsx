import { useEffect, useState } from "react";

interface Stats {
  availableTokens: number;
  totalBuilds: number;
  totalTokensPurchased: number;
}

const MainDashboard = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const API = "http://localhost:8001/api";

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await fetch(`${API}/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Dashboard fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Available Tokens */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border hover:shadow-lg transition">
          <p className="text-sm text-gray-500">
            Available Tokens
          </p>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {stats?.availableTokens}
          </p>
        </div>

        {/* Total Builds */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border hover:shadow-lg transition">
          <p className="text-sm text-gray-500">
            Total Builds Created
          </p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {stats?.totalBuilds}
          </p>
        </div>

        {/* Total Tokens Purchased */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border hover:shadow-lg transition">
          <p className="text-sm text-gray-500">
            Total Tokens Purchased
          </p>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {stats?.totalTokensPurchased}
          </p>
        </div>

      </div>
    </>
  );
};

export default MainDashboard;