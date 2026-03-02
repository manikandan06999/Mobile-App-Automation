// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import CreateAppModal from "@/components/sections/CreateAppModal";
// import NoTokenModal from "@/components/common/NoTokenModal";
// import BuildProgressModal from "@/components/common/BuildProgressModal";

// interface AppTemplate {
//   id: number;
//   title: string;
//   type:
//     | "mart"
//     | "efood"
//     | "reseller"
//     | "multimart"
//     | "ecommerce"
//     | "one_click_builder";
//   version: string;
//   tech: string[];
//   token: string;
//   sales: number;
//   image: string;
// }

// const appTemplates: AppTemplate[] = [
//   {
//     id: 1,
//     title: "Grocery App",
//     type: "one_click_builder",
//     version: "iOS 12–15, Android 12+",
//     tech: ["JavaScript", "React", "Expo"],
//     token: "1 Token",
//     sales: 16,
//     image: "/images/appcard/Mart.jpeg",
//   },
// ];

// const CreateAppPage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedAppType, setSelectedAppType] = useState<string | null>(null);
//   const [showNoTokenModal, setShowNoTokenModal] = useState(false);
//   const [taskId, setTaskId] = useState<string | null>(null);
//   const API = "http://localhost:8001/api";

//   // 🔥 Get tokens from localStorage (already fetched in layout)
//   const [tokens] = useState<number>(Number(localStorage.getItem("tokens")) || 0);

//   const handleCreateAppClick = (type: string) => {
//     if (tokens > 0) {
//       setSelectedAppType(type);
//       setShowModal(true);
//     } else {
//       setShowNoTokenModal(true);
//     }
//   };
//      /* ---------------- BUY TOKEN ---------------- */
// const buyToken = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     const orderRes = await fetch(`${API}/orders/create`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         packageName: "starter",
//       }),
//     });

//     const order = await orderRes.json();

//     if (!window.Razorpay) {
//       alert("Razorpay SDK not loaded");
//       return;
//     }

//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount * 100, // MUST be paise
//       currency: "INR",
//       name: "Mobile App Builder",
//       description: "Token Purchase",
//       order_id: order.razorpayOrderId, // must match backend

//       handler: async function (response: any) {
//         await fetch(`${API}/orders/confirm`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//             dbOrderId: order.dbOrderId,
//           }),
//         });

//         alert("Payment Successful 🎉");
//       },

//       modal: {
//         ondismiss: function () {
//           console.log("Payment popup closed");
//         },
//       },

//       theme: {
//         color: "#2563EB",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();

//   } catch (err) {
//     console.error(err);
//     alert("Payment failed");
//   }
// };


//   return (
//     <>
//       {/* HEADER */}
//       <div className="mb-5">
//         <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
//           My Apps
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400">
//           Create and manage your applications
//         </p>
//       </div>

//       {/* SEARCH */}
//       <div className="relative mb-5">
//         <FaSearch className="absolute left-4 top-4 text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search apps..."
//           className="w-full pl-12 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 dark:text-white"
//         />
//       </div>

//       {/* APP CARDS */}
//       <div className="space-y-6">
//         {appTemplates.map((app) => (
//           <div
//             key={app.id}
//             className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-xl shadow-sm p-6 flex gap-6 items-center"
//           >
//             {/* IMAGE */}
//             <div className="w-72 h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
//               <img
//                 src={app.image}
//                 alt="App Preview"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* DETAILS */}
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 {app.title}
//               </h3>

//               <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//                 Software Version: {app.version}
//               </p>

//               <div className="flex flex-wrap gap-2 mt-3">
//                 {app.tech.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* ACTIONS */}
//             <div className="text-right flex flex-col justify-between h-40">
//               <div>
//                 <p className="text-2xl font-bold text-gray-900 dark:text-white">
//                   {app.token}
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   {app.sales} Sales
//                 </p>
//               </div>

//               <div className="flex gap-3 justify-end mt-4">
//                 <button
//                   onClick={() => handleCreateAppClick(app.type)}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
//                 >
//                   Start Development
//                 </button>

//                 <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
//                   Live Preview
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//             {showModal && selectedAppType && (
//          <CreateAppModal
//   onClose={() => setShowModal(false)}
//   defaultAppType={selectedAppType}
//   onBuildStarted={(taskId: string) => {
//     setShowModal(false);
//     setTaskId(taskId);
//   }}
// />
//        )}

//       {showNoTokenModal && (
//         <NoTokenModal
//   onClose={() => setShowNoTokenModal(false)}
//   onBuy={() => {
//     setShowNoTokenModal(false);
//     buyToken();
//   }}
// />
//        )}
//        {taskId && (
//   <BuildProgressModal
//     taskId={taskId}
//     onClose={() => setTaskId(null)}
//   />
// )}
//     </>
//   );
// };

// export default CreateAppPage;


import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import CreateAppModal from "@/components/sections/CreateAppModal";
import NoTokenModal from "@/components/common/NoTokenModal";
import BuildProgressModal from "@/components/common/BuildProgressModal";

interface AppTemplate {
  id: number;
  title: string;
  type: "one_click_builder";
  version: string;
  tech: string[];
  token: string;
  sales: number;
  image: string;
}

const appTemplates: AppTemplate[] = [
  {
    id: 1,
    title: "Grocery App",
    type: "one_click_builder",
    version: "iOS 12–15, Android 12+",
    tech: ["JavaScript", "React", "Expo"],
    token: "1 Token",
    sales: 16,
    image: "/images/appcard/Mart.jpeg",
  },
];

const CreateAppPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAppType, setSelectedAppType] = useState<string | null>(null);
  const [showNoTokenModal, setShowNoTokenModal] = useState(false);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [tokens, setTokens] = useState<number>(0);

  useEffect(() => {
    const stored = localStorage.getItem("tokens");
    setTokens(Number(stored) || 0);
  }, []);

  const handleCreateAppClick = (type: string) => {
    if (tokens > 0) {
      setSelectedAppType(type);
      setShowModal(true);
    } else {
      setShowNoTokenModal(true);
    }
  };

  return (
    <>
      <div className="mb-5">
        <h1 className="text-2xl font-bold">My Apps</h1>
        <p className="text-gray-500">Create and manage your applications</p>
      </div>

      <div className="relative mb-5">
        <FaSearch className="absolute left-4 top-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search apps..."
          className="w-full pl-12 pr-4 py-3 rounded-lg border"
        />
      </div>

      <div className="space-y-6">
        {appTemplates.map((app) => (
          <div
            key={app.id}
            className="bg-white border rounded-xl shadow-sm p-6 flex gap-6 items-center"
          >
            <div className="w-72 h-40 rounded-lg overflow-hidden bg-gray-200">
              <img
                src={app.image}
                alt="App Preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{app.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Software Version: {app.version}
              </p>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold">{app.token}</p>

              <button
                onClick={() => handleCreateAppClick(app.type)}
                className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Start Development
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedAppType && (
        <CreateAppModal
          onClose={() => setShowModal(false)}
          defaultAppType={selectedAppType}
          onBuildStarted={(id: string) => {
            setShowModal(false);
            setTaskId(id);
          }}
        />
      )}

      {showNoTokenModal && (
        <NoTokenModal
          onClose={() => setShowNoTokenModal(false)}
          onBuy={() => setShowNoTokenModal(false)}
        />
      )}

      {taskId && (
        <BuildProgressModal
          taskId={taskId}
          onClose={() => setTaskId(null)}
        />
      )}
    </>
  );
};

export default CreateAppPage;