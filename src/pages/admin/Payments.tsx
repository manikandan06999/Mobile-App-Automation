import { useEffect, useState } from "react";

interface Payment {
  id: number;
  user_email: string;
  amount: number;
  tokens_purchased: number;
  payment_status: string;
  created_at: string;
}

const AdminPayments = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch(
          "http://localhost:8001/api/admin/payments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        setPayments(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Payments History
      </h1>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-800 text-sm">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">User</th>
              <th className="p-4">Amount (₹)</th>
              <th className="p-4">Tokens</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-t dark:border-gray-700"
              >
                <td className="p-4">{payment.id}</td>
                <td className="p-4">{payment.user_email}</td>
                <td className="p-4">{payment.amount}</td>
                <td className="p-4">
                  {payment.tokens_purchased}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded text-xs ${
                      payment.payment_status === "paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {payment.payment_status}
                  </span>
                </td>
                <td className="p-4">
                  {new Date(
                    payment.created_at
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {payments.length === 0 && (
          <p className="p-6 text-gray-500">
            No payments found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminPayments;
