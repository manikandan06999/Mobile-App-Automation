import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FiTrendingUp, FiUsers, FiDollarSign } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";

interface RevenueData {
  month: string;
  revenue: number;
}

interface TokenData {
  month: string;
  tokens: number;
}

const AdminAnalytics = () => {
  const [revenueData, setRevenueData] = useState<RevenueData[]>([]);
  const [tokenData, setTokenData] = useState<TokenData[]>([]);
  const [summary, setSummary] = useState({
    totalRevenue: 0,
    totalUsers: 0,
    totalTokens: 0,
    growth: 0,
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAnalytics = async () => {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [revRes, tokenRes, summaryRes] = await Promise.all([
        fetch("http://localhost:8001/api/admin/revenue-chart", { headers }),
        fetch("http://localhost:8001/api/admin/token-chart", { headers }),
        fetch("http://localhost:8001/api/admin/analytics-summary", { headers }),
      ]);

      setRevenueData(await revRes.json());
      setTokenData(await tokenRes.json());
      setSummary(await summaryRes.json());
    };

    fetchAnalytics();
  }, []);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-10">
        Analytics Overview 📊
      </h1>

      {/* ---------------- SUMMARY CARDS ---------------- */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h2 className="text-2xl font-bold mt-2">
                ₹{summary.totalRevenue}
              </h2>
            </div>
            <FiDollarSign className="text-green-500 text-3xl" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <h2 className="text-2xl font-bold mt-2">
                {summary.totalUsers}
              </h2>
            </div>
            <FiUsers className="text-blue-500 text-3xl" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Tokens Sold</p>
              <h2 className="text-2xl font-bold mt-2">
                {summary.totalTokens}
              </h2>
            </div>
            <FaCoins className="text-yellow-500 text-3xl" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Growth</p>
              <h2 className="text-2xl font-bold mt-2 text-green-600">
                {summary.growth}%
              </h2>
            </div>
            <FiTrendingUp className="text-purple-500 text-3xl" />
          </div>
        </div>

      </div>

      {/* ---------------- REVENUE CHART ---------------- */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-6">
          Monthly Revenue 📈
        </h2>

        <div className="w-full h-80">
          <ResponsiveContainer>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
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

      {/* ---------------- TOKEN SALES CHART ---------------- */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-6">
          Token Sales 📊
        </h2>

        <div className="w-full h-80">
          <ResponsiveContainer>
            <BarChart data={tokenData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tokens" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default AdminAnalytics;
