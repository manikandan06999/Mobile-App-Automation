// // import { FaPlus, FaSearch, } from "react-icons/fa";
// // import { FiBell, FiCreditCard, FiKey, FiSettings, FiCode } from "react-icons/fi";
// // import logo from "@/assets/images/mablogo.png";
// // import DashboardFooter from "./DashboardFooter";
// // import { useState } from "react";
// // import CreateAppModal from "@/components/sections/CreateAppModal";

// // const Dashboard = () => {
// //   const [showModal, setShowModal] = useState(false);

// //   return (
// //   <div id="dashboard" className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 transition-colors duration-300">

// //     {/* CONTENT AREA */}
// //     <div className="flex flex-1">

// //       {/* SIDEBAR */}
// //       <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col">
        
// //         <div>
// //           <div className="p-6 border-b dark:border-gray-800">
// //             <a href="/" className="flex items-center">
// //             <img src={logo} alt="Logo" className="h-10" />
// //             </a>
// //           </div>

// //           <div className="p-6 space-y-4 text-sm">
// //             <p className="text-xs text-gray-400 uppercase">Dashboard</p>

// //             <button className="w-full flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
// //               Apps
// //             </button>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
// //               <FiBell /> Notifications
// //             </button>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
// //               <FiCreditCard /> Billing
// //             </button>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
// //               <FiKey /> API Keys
// //             </button>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
// //               <FiSettings /> Settings
// //             </button>

// //             <p className="text-xs text-gray-400 uppercase mt-6">Documents</p>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg transition">
// //               <FiCode /> API
// //             </button>
// //           </div>
// //         </div>

// //       </aside>

// //       {/* MAIN CONTENT */}
// //       <main className="flex-1 p-10 flex flex-col">

// //         {/* Top Section */}
// //         <div className="flex justify-between items-center mb-8">
// //           <div>
// //             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
// //               My Apps
// //             </h1>
// //             <p className="text-gray-500 dark:text-gray-400">
// //               Create and manage your applications
// //             </p>
// //           </div>

// //           <button
// //   onClick={() => setShowModal(true)}
// //   className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition"
// // >
// //   <FaPlus />
// //   Create App
// // </button>
// //         </div>

// //         {/* Search */}
// //         <div className="relative mb-16">
// //           <FaSearch className="absolute left-4 top-4 text-gray-400" />
// //           <input
// //             type="text"
// //             placeholder="Search apps by name or URL..."
// //             className="w-full pl-12 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 dark:text-white"
// //           />
// //         </div>

// //        {/* App List Section */}
// // <div className="flex-1 space-y-6">

// //   {/* APP CARD */}
// //   <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-xl shadow-sm p-6 flex gap-6 items-center transition">

// //     {/* LEFT IMAGE */}
// //     <div className="w-72 h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
// //       <img
// //         src="/assets/sample-app.jpg" // replace with your image
// //         alt="App Preview"
// //         className="w-full h-full object-cover"
// //       />
// //     </div>

// //     {/* CENTER CONTENT */}
// //     <div className="flex-1">
// //       <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
// //         Bottle Ecommerce - React Native Mobile Expo App
// //       </h3>

// //       <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
// //         Software Version: iOS 12–15, Android 12+
// //       </p>

// //       <div className="flex flex-wrap gap-2 mt-3">
// //         <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded">
// //           JavaScript
// //         </span>
// //         <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded">
// //           React Native
// //         </span>
// //         <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded">
// //           Expo
// //         </span>
// //       </div>
// //     </div>

// //     {/* RIGHT SIDE */}
// // <div className="text-right flex flex-col justify-between h-40">

// //   <div>
// //     <p className="text-2xl font-bold text-gray-900 dark:text-white">
// //       1 Token
// //     </p>
// //     <p className="text-xs text-gray-500 dark:text-gray-400">
// //       16 Sales
// //     </p>
// //   </div>

// //   {/* Buttons Row */}
// //   <div className="flex gap-3 justify-end mt-4">
// //     <button className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
// //       Create App
// //     </button>

// //     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
// //       Live Preview
// //     </button>
// //   </div>

// // </div>


// //   </div>

// // </div>

// // {showModal && <CreateAppModal onClose={() => setShowModal(false)} />}

// //       </main>
// //     </div>

// //     {/* FOOTER ALWAYS AT BOTTOM */}
// //     <DashboardFooter />
// //   </div>
// // );

  
// // };

// // export default Dashboard;

//   // {
//   //   id: 2,
//   //   title: "Mart Multi-Vendor Grocery App",
//   //   type: "mart",
//   //   version: "Android 12+, iOS 14+",
//   //   tech: ["Flutter", "Firebase"],
//   //   token: "2 Tokens",
//   //   sales: 22,
//   //   image: "/images/appcard/Mart.jpeg",
//   // },
//   // {
//   //   id: 3,
//   //   title: "E-Food Restaurant Ordering App",
//   //   type: "efood",
//   //   version: "Android 11+, iOS 13+",
//   //   tech: ["Flutter", "Node.js"],
//   //   token: "2 Tokens",
//   //   sales: 10,
//   //   image: "/images/appcard/Efood.jpeg",
//   // },
//   // {
//   //   id: 4,
//   //   title: "Reseller Business App",
//   //   type: "reseller",
//   //   version: "Android 10+, iOS 12+",
//   //   tech: ["Flutter", "Laravel API"],
//   //   token: "1 Token",
//   //   sales: 8,
//   //   image: "/images/appcard/Reseller.jpeg",
//   // },
//   // {
//   //   id: 5,
//   //   title: "MultiMart Super Store App",
//   //   type: "multimart",
//   //   version: "Android 12+, iOS 14+",
//   //   tech: ["Flutter", "Stripe", "Firebase"],
//   //   token: "3 Tokens",
//   //   sales: 14,
//   //   image: "/images/appcard/Multimart.jpeg",
//   // },
//   // {
//   //   id: 6,
//   //   title: "Bottle Ecommerce - React Native Mobile Expo App",
//   //   type: "ecommerce",
//   //   version: "iOS 12–15, Android 12+",
//   //   tech: ["JavaScript", "React Native", "Expo"],
//   //   token: "1 Token",
//   //   sales: 16,
//   //   image: "/images/appcard/ecom.jpeg",
//   // },

// // import {  FaSearch } from "react-icons/fa";
// // import { FiBell, FiCreditCard, FiKey, FiSettings, FiCode, FiLogOut } from "react-icons/fi";
// // import logo from "@/assets/images/mablogo.png";
// // import DashboardFooter from "./DashboardFooter";
// // import { useEffect, useState } from "react";
// // import CreateAppModal from "@/components/sections/CreateAppModal";
// // import NoTokenModal from "@/components/common/NoTokenModal";


// // interface AppTemplate {
// //   id: number;
// //   title: string;
// //   type: "mart" | "efood" | "reseller" | "multimart" | "ecommerce" | "oneclick";
// //   version: string;
// //   tech: string[];
// //   token: string;
// //   sales: number;
// //   image: string;
// // }

// // const appTemplates: AppTemplate[] = [
// //   {
// //     id: 1,
// //     title: "Glocery App",
// //     type: "oneclick",
// //     version: "iOS 12–15, Android 12+",
// //     tech: ["JavaScript", "React", "Expo"],
// //     token: "1 Token",
// //     sales: 16,
// //     image: "/images/appcard/Mart.jpeg",
// //   },

// // ];


// //   const logout = () => {
// //     localStorage.removeItem("user");
// //     window.location.href = "/";
// //   };
// // const Dashboard = () => {
// //   const [showModal, setShowModal] = useState(false);
// //   const [selectedAppType, setSelectedAppType] = useState<string | null>(null);
// //   const [showNoTokenModal, setShowNoTokenModal] = useState(false);
// // const [tokens, setTokens] = useState<number>(0);

// // useEffect(() => {
// //   const fetchUser = async () => {
// //     const token = localStorage.getItem("token");

// //     const res = await fetch("http://localhost:8001/user/me", {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });

// //     const data = await res.json();
// //     setTokens(data.tokens);
// //   };

// //   fetchUser();
// // }, []);

// // const handleCreateAppClick = () => {
// //   if (tokens > 0) {
// //     setShowModal(true);
// //   } else {
// //     setShowNoTokenModal(true);
// //   }
// // };


// // const buyToken = async () => {
// //   try {
// //     const token = localStorage.getItem("token");

// //     const orderRes = await fetch("http://localhost:8001/payment/create-order", {
// //       method: "POST",
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });

// //     const order = await orderRes.json();

// //     const options = {
// //       key: "rzp_test_SHZJnnp6AtN8SX", // 🔥 replace with your real key
// //       amount: order.amount,
// //       currency: order.currency,
// //       order_id: order.id,
// //       handler: async function (response: any) {
// //         await fetch("http://localhost:8001/payment/verify", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //           },
// //           body: JSON.stringify(response),
// //         });

// //         alert("Token purchased successfully!");
// //         window.location.reload();
// //       },
// //     };

// //     const rzp = new (window as any).Razorpay(options);
// //     rzp.open();
// //   } catch (err) {
// //     console.error(err);
// //     alert("Payment failed");
// //   }
// // };



// //   return (
// //     <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 transition-colors duration-300">

// //       {/* CONTENT AREA */}
// //       <div className="flex flex-1">

// //         {/* SIDEBAR */}
// //         <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800">
// //           <div className="p-6 border-b dark:border-gray-800">
// //             <a href="/">
// //               <img src={logo} alt="Logo" className="h-10" />
// //             </a>
// //           </div>

// //           <div className="p-6 space-y-4 text-sm">
// //             <p className="text-xs text-gray-400 uppercase">Dashboard</p>

// //             <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">
// //               Apps
// //             </button>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
// //               <FiBell /> Notifications
// //             </button>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
// //               <FiCreditCard /> Billing
// //             </button>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
// //               <FiKey /> API Keys
// //             </button>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
// //               <FiSettings /> Settings
// //             </button>

// //             <p className="text-xs text-gray-400 uppercase mt-6">Documents</p>

// //             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
// //               <FiCode /> API
// //             </button>
// //           </div>
// //         </aside>

// //         {/* MAIN */}
// //         <main className="flex-1 p-10">

// //           {/* Header */}
// //           <div className="flex justify-between items-center mb-8">
// //             <div>
// //               <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
// //                 My Apps
// //               </h1>
// //               <p className="text-gray-500 dark:text-gray-400">
// //                 Create and manage your applications
// //               </p>
// //             </div>
// // <p className="text-sm text-gray-500 dark:text-gray-400">
// //   Available Tokens: 
// //   <span className="font-bold ml-1 text-blue-600">
// //     {tokens}
// //   </span>
// // </p>
// // {tokens <= 0 && (
// //   <p className="text-sm text-red-500 mt-2">
// //     Not enough tokens. Please purchase a token to create an app.
// //   </p>
// // )}
// //             <button
// //                       onClick={logout}
// //                       className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
// //                     >
// //                       <FiLogOut />Logout
// //                     </button>
// //           </div>

// //           {/* Search */}
// //           <div className="relative mb-10">
// //             <FaSearch className="absolute left-4 top-4 text-gray-400" />
// //             <input
// //               type="text"
// //               placeholder="Search apps..."
// //               className="w-full pl-12 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 dark:text-white"
// //             />
// //           </div>

// // {/* App Cards */}
// // <div className="space-y-6">
// //   {appTemplates.map((app) => (
// //     <div
// //       key={app.id}
// //       className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-xl shadow-sm p-6 flex gap-6 items-center transition"
// //     >

// //       {/* LEFT IMAGE */}
// //       <div className="w-72 h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
// //         <img
// //           src={app.image}
// //           alt="App Preview"
// //           className="w-full h-full object-cover"
// //         />
// //       </div>

// //       {/* CENTER CONTENT */}
// //       <div className="flex-1">
// //         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
// //           {app.title}
// //         </h3>

// //         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
// //           Software Version: {app.version}
// //         </p>

// //         {/* Tech Badges */}
// //         <div className="flex flex-wrap gap-2 mt-3">
// //           {app.tech.map((tag, index) => (
// //             <span
// //               key={index}
// //               className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded"
// //             >
// //               {tag}
// //             </span>
// //           ))}
// //         </div>
// //       </div>

// //       {/* RIGHT SIDE */}
// //       <div className="text-right flex flex-col justify-between h-40">

// //         <div>
// //           <p className="text-2xl font-bold text-gray-900 dark:text-white">
// //             {app.token}
// //           </p>
// //           <p className="text-xs text-gray-500 dark:text-gray-400">
// //             {app.sales} Sales
// //           </p>

// //         </div>

// //         {/* Buttons */}
// //         <div className="flex gap-3 justify-end mt-4">
// //           <button
// //   onClick={handleCreateAppClick}
// //   className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
// // >
// //   Start Development
// // </button>

// //           <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
// //             Live Preview
// //           </button>
// //         </div>
// //       </div>
// //     </div>
    
// //   ))}
// // </div>


// //         </main>
// //       </div>

// //       <DashboardFooter />

// //       {showModal && (
// //   <CreateAppModal onClose={() => setShowModal(false)} defaultAppType={""} />
// // )}

// // {showNoTokenModal && (
// //   <NoTokenModal
// //     onClose={() => setShowNoTokenModal(false)}
// //     onBuy={() => {
// //       setShowNoTokenModal(false);
// //       buyToken(); // your Razorpay function
// //     }}
// //   />
// // )}

// //     </div>
// //   );
// // };

// // export default Dashboard;



// import { FaSearch } from "react-icons/fa";
// import {
//   FiBell,
//   FiCreditCard,
//   FiKey,
//   FiSettings,
//   FiCode,
//   FiLogOut,
// } from "react-icons/fi";
// import logo from "@/assets/images/mablogo.png";
// import DashboardFooter from "./DashboardFooter";
// import { useEffect, useState } from "react";
// import CreateAppModal from "@/components/sections/CreateAppModal";
// import NoTokenModal from "@/components/common/NoTokenModal";
// import { Link } from "react-router-dom";

// interface AppTemplate {
//   id: number;
//   title: string;
//   type: "mart" | "efood" | "reseller" | "multimart" | "ecommerce" | "one_click_builder";
//   version: string;
//   tech: string[];
//   token: string;
//   sales: number;
//   image: string;
// }

// const appTemplates: AppTemplate[] = [
//   {
//     id: 1,
//     title: "Glocery App",
//     type: "one_click_builder",
//     version: "iOS 12–15, Android 12+",
//     tech: ["JavaScript", "React", "Expo"],
//     token: "1 Token",
//     sales: 16,
//     image: "/images/appcard/Mart.jpeg",
//   },
// ];

// const Dashboard = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedAppType, setSelectedAppType] = useState<string | null>(null);
//   const [showNoTokenModal, setShowNoTokenModal] = useState(false);
//   const [tokens, setTokens] = useState<number>(0);
//   const API = "http://localhost:8001/api";

//   /* ---------------- LOGOUT ---------------- */
//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   /* ---------------- FETCH USER ---------------- */
//   // useEffect(() => {
//   //   const fetchUser = async () => {
//   //     const token = localStorage.getItem("token");

//   //     if (!token) {
//   //       window.location.href = "/login";
//   //       return;
//   //     }

//   //     const res = await fetch("http://localhost:8001/api/user/me", {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });

//   //     if (!res.ok) {
//   //       localStorage.removeItem("token");
//   //       window.location.href = "/login";
//   //       return;
//   //     }

//   //     const data = await res.json();
//   //     setTokens(data.tokens);
//   //   };

//   //   fetchUser();
//   // }, []);
// useEffect(() => {
//   const fetchDashboard = async () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       window.location.href = "/login";
//       return;
//     }

//     const res = await fetch(
//       `${API}/dashboard`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!res.ok) {
//       localStorage.removeItem("token");
//       window.location.href = "/login";
//       return;
//     }

//     const data = await res.json();
//     setTokens(data.availableTokens);
//   };

//   fetchDashboard();
// }, []);
//   /* ---------------- CREATE APP CLICK ---------------- */
//   const handleCreateAppClick = (type: string) => {
//     if (tokens > 0) {
//       setSelectedAppType(type);
//       setShowModal(true);
//     } else {
//       setShowNoTokenModal(true);
//     }
//   };

//   /* ---------------- BUY TOKEN ---------------- */
//   const buyToken = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const orderRes = await fetch(
//   `${API}/orders/create`,
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       packageName: "starter", // or selected package
//     }),
//   }
// );

//       const order = await orderRes.json();

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID, // replace with your real key
//         amount: order.amount,
//         currency: order.currency,
//         order_id: order.id,
//         handler: async function (response: any) {
//           const verifyRes = await fetch(
//             `${API}/orders/confirm`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//               },
//               body: JSON.stringify(response),
//             }
//           );

//           if (!verifyRes.ok) {
//             alert("Payment verification failed");
//             return;
//           }

//           alert("Token purchased successfully!");

//           // 🔥 Refresh tokens without reload
//           const userRes = await fetch(
//             `${API}/user/me`,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           const userData = await userRes.json();
//           setTokens(userData.tokens);
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 transition-colors">

//       <div className="flex flex-1">

//         {/* SIDEBAR */}
//         <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800">
//           <div className="p-6 border-b dark:border-gray-800">
//             <a href="/">
//               <img src={logo} alt="Logo" className="h-10" />
//             </a>
//           </div>

//           <div className="p-6 space-y-4 text-sm">
//             <p className="text-xs text-gray-400 uppercase">Dashboard</p>

//             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
//             main Dashboard
//             </button>
//             {/* <Link to="/maindashboard">
//   <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">
//     main Dashboard
//   </button>
// </Link> */}

//             <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">
//               <FiBell />create my app
//             </button>

//             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
//               <FiCreditCard /> app record
//             </button>

//             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
//               <FiKey /> tokens
//             </button>

//             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
//               <FiSettings /> Billing
//             </button>

//             <p className="text-xs text-gray-400 uppercase mt-6">Documents</p>

//             <button className="w-full flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg">
//               <FiCode /> API
//             </button>
//           </div>
//         </aside>

//         {/* MAIN */}
//         <main className="flex-1 p-10">

//           {/* HEADER */}
//           <div className="flex justify-between items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//                 My Apps
//               </h1>
//               <p className="text-gray-500 dark:text-gray-400">
//                 Create and manage your applications
//               </p>
//             </div>

//             <div className="flex items-center gap-6">
//               <div>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Tokens
//                 </p>
//                 <p className="text-lg font-bold text-blue-600">
//                   {tokens}
//                 </p>
//               </div>

//               <button
//                 onClick={logout}
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//               >
//                 <FiLogOut /> Logout
//               </button>
//             </div>
//           </div>

//           {/* SEARCH */}
//           <div className="relative mb-10">
//             <FaSearch className="absolute left-4 top-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search apps..."
//               className="w-full pl-12 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 dark:text-white"
//             />
//           </div>

//           {/* APP CARDS */}
//           <div className="space-y-6">
//             {appTemplates.map((app) => (
//               <div
//                 key={app.id}
//                 className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-xl shadow-sm p-6 flex gap-6 items-center"
//               >
//                 <div className="w-72 h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
//                   <img
//                     src={app.image}
//                     alt="App Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     {app.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//                     Software Version: {app.version}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mt-3">
//                     {app.tech.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="text-right flex flex-col justify-between h-40">
//                   <div>
//                     <p className="text-2xl font-bold text-gray-900 dark:text-white">
//                       {app.token}
//                     </p>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">
//                       {app.sales} Sales
//                     </p>
//                   </div>

//                   <div className="flex gap-3 justify-end mt-4">
//                     <button
//                       onClick={() => handleCreateAppClick(app.type)}
//                       className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
//                     >
//                       Start Development
//                     </button>

//                     <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
//                       Live Preview
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </main>
//       </div>

//       <DashboardFooter />

//       {showModal && selectedAppType && (
//         <CreateAppModal
//           onClose={() => setShowModal(false)}
//           defaultAppType={selectedAppType}
//         />
//       )}

//       {showNoTokenModal && (
//         <NoTokenModal
//           onClose={() => setShowNoTokenModal(false)}
//           onBuy={() => {
//             setShowNoTokenModal(false);
//             buyToken();
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard;
