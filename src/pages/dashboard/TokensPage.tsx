import { useEffect, useState } from "react";

interface TokenBatch {
  id: number;
  tokens_purchased: number;
  tokens_remaining: number;
  valid_until: string;
}

const tokenPlans = [
  { name: "starter", tokens: 1, price: 1000 },
  { name: "pro", tokens: 10, price: 9500 },
  { name: "premium", tokens: 50, price: 45000 },
];

const TokensPage = () => {
  const [availableTokens, setAvailableTokens] = useState(0);
  const [batches, setBatches] = useState<TokenBatch[]>([]);

  const API = "http://localhost:8001/api";

  const fetchTokens = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/tokens`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setAvailableTokens(data.availableTokens);
    setBatches(data.batches);
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  /* ================= BUY TOKEN ================= */

  const buyToken = async (packageName: string) => {
    const token = localStorage.getItem("token");

    const orderRes = await fetch(`${API}/orders/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ packageName }),
    });

    const order = await orderRes.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount * 100,
      currency: "INR",
      order_id: order.razorpayOrderId,

      handler: async function (response: any) {
        const verifyRes = await fetch(`${API}/orders/confirm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...response,
            dbOrderId: order.dbOrderId,
            packageName,
          }),
        });

        if (!verifyRes.ok) {
          alert("Payment verification failed");
          return;
        }

        alert("Tokens purchased successfully 🎉");
        fetchTokens();
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">
        Token Management
      </h1>

      {/* Available Tokens Card */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg mb-10">
        <p className="text-sm opacity-80">
          Available Tokens
        </p>
        <p className="text-4xl font-bold mt-2">
          {availableTokens}
        </p>
      </div>

      {/* ================= BUY TOKENS SECTION ================= */}
      <h2 className="text-xl font-semibold mb-4">
        Buy More Tokens
      </h2>

      <div className="grid grid-cols-3 gap-6 mb-10">
        {tokenPlans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white dark:bg-gray-900 border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold capitalize">
              {plan.name} Plan
            </h3>

            <p className="text-3xl font-bold mt-2 text-blue-600">
              ₹{plan.price}
            </p>

            <p className="mt-2 text-gray-500">
              {plan.tokens} Tokens
            </p>

            <button
              onClick={() => buyToken(plan.name)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* ================= TOKEN BATCH TABLE ================= */}
      <h2 className="text-xl font-semibold mb-4">
        Token History
      </h2>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800 text-left">
            <tr>
              <th className="p-4">Purchased</th>
              <th className="p-4">Remaining</th>
              <th className="p-4">Expiry</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {batches.map((batch) => {
              const isExpired =
                new Date(batch.valid_until) < new Date();

              return (
                <tr
                  key={batch.id}
                  className="border-t hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <td className="p-4">
                    {batch.tokens_purchased}
                  </td>

                  <td className="p-4 font-medium">
                    {batch.tokens_remaining}
                  </td>

                  <td className="p-4">
                    {new Date(batch.valid_until).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        isExpired
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {isExpired ? "Expired" : "Active"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TokensPage;