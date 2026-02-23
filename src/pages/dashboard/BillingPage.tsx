import { useEffect, useState } from "react";

interface Order {
  id: number;
  tokens_purchased: number;
  tokens_remaining: number;
  payment_status: string;
  valid_until: string;
  created_at: string;
}

const BillingPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const API = "http://localhost:8001/api";

  useEffect(() => {
    const fetchBilling = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/billing`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setOrders(data);
    };

    fetchBilling();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">
        Billing & Payment History
      </h1>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800 text-left">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Tokens Purchased</th>
              <th className="p-4">Remaining</th>
              <th className="p-4">Status</th>
              <th className="p-4">Expiry</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="p-4 font-medium">
                  #{order.id}
                </td>

                <td className="p-4">
                  {order.tokens_purchased}
                </td>

                <td className="p-4">
                  {order.tokens_remaining}
                </td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      order.payment_status === "paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {order.payment_status}
                  </span>
                </td>

                <td className="p-4">
                  {new Date(order.valid_until).toLocaleDateString()}
                </td>

                <td className="p-4 text-gray-500">
                  {new Date(order.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BillingPage;