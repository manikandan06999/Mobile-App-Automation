
// import { useState, useEffect } from "react";
// import { FaTimes } from "react-icons/fa";

// interface Props {
//   onClose: () => void;
//   defaultAppType?: string | null;
// }

// const CreateAppModal = ({ onClose, defaultAppType }: Props) => {
//   const [apptype, setApptype] = useState("");
//   const [logoPreview, setLogoPreview] = useState<string | null>(null);

//   useEffect(() => {
//     if (defaultAppType) {
//       setApptype(defaultAppType);
//     }
//   }, [defaultAppType]);

//   const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setLogoPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`App Created with type: ${apptype}`);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

//       <div className="bg-white dark:bg-gray-900 w-full max-w-xl rounded-2xl shadow-2xl p-8 relative transition-colors">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold text-gray-900 dark:text-white">
//             Create Android WebView App
//           </h2>

//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 dark:hover:text-white"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">

//           {/* App Name */}
//           <div>
//             <label className="text-sm text-gray-500 dark:text-gray-400">
//               App Name
//             </label>
//             <input
//               type="text"
//               required
//               placeholder="App Name"
//               className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
//             />
//           </div>

//           {/* Website URL */}
//           <div>
//             <label className="text-sm text-gray-500 dark:text-gray-400">
//               Website URL
//             </label>
//             <input
//               type="url"
//               required
//               placeholder="https://example.com"
//               className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
//             />
//           </div>

//           {/* Fixed App Type */}
//           <div>
//             <label className="text-sm text-gray-500 dark:text-gray-400">
//               App Type
//             </label>

//             <div className="mt-2 p-3 rounded-lg border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white font-medium capitalize">
//               {apptype || "Not Selected"}
//             </div>

//             <input type="hidden" name="apptype" value={apptype} />
//           </div>

//           {/* Logo Upload */}
//           <div>
//             <label className="text-sm text-gray-500 dark:text-gray-400">
//               App Logo
//             </label>

//             <div className="mt-2 flex items-center gap-4">
//               <div className="w-16 h-16 rounded-lg border bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
//                 {logoPreview ? (
//                   <img
//                     src={logoPreview}
//                     alt="Logo Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <span className="text-xs text-gray-400">
//                     Preview
//                   </span>
//                 )}
//               </div>

//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleLogoChange}
//                 required
//                 className="text-sm text-gray-600 dark:text-gray-300"
//               />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-4 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
//             >
//               Create App
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateAppModal;


// import { useState } from "react";
// import { FaTimes } from "react-icons/fa";

// interface Props {
//   onClose: () => void;
//   defaultAppType: string;
// }
// interface Props {
//   onClose: () => void;
//   defaultAppType: string;
//   onBuildStarted: (taskId: string) => void;
// }

// const CreateAppModal = ({ onClose, defaultAppType }: Props) => {
//   const [loading, setLoading] = useState(false);
//   const [logo, setLogo] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
// const API = "http://localhost:8001/api";
// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Please login again");
//       window.location.href = "/login";
//       return;
//     }

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     formData.append("app_type", defaultAppType);

//     if (logo) {
//       formData.append("logo", logo);
//     }

//     const res = await fetch(`${API}/build/start`, {
//   method: "POST",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
//   body: formData,
// });

// const data = await res.json();

// if (data.taskId) {
//   onBuildStarted(data.taskId);
// };

//     if (!res.ok) {
//       if (data.error === "No valid tokens available") {
//         alert("No tokens available. Please purchase tokens.");
//       } else {
//         alert(data.error || "Build failed");
//       }
//       return;
//     }

//     // alert("Build completed successfully! APK sent to your email.");
//     // onClose();

//     // 🔥 Refresh dashboard tokens
//     // window.location.reload();
//  // ✅ SUCCESS CASE
//     alert(data.message);
//     onClose();
//     window.location.reload();

//   } catch (err) {
//     console.error("Frontend error:", err);
//     alert("Server error");
//   } finally {
//     setLoading(false);
//   }
// };
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
//       <div className="bg-white dark:bg-gray-900 w-full max-w-xl rounded-2xl shadow-2xl p-8 relative">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold text-gray-900 dark:text-white">
//             Create {defaultAppType} App
//           </h2>
//           <button onClick={onClose}>
//             <FaTimes />
//           </button>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="space-y-5">

//           <div>
//             <label className="text-sm">App Name</label>
//             <input
//               name="app_name"
//               required
//               className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800"
//             />
//           </div>

//           <div>
//             <label className="text-sm">Website URL</label>
//             <input
//               name="domain"
//               required
//               placeholder="https://example.com"
//               className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800"
//             />
//           </div>

//           <div>
//             <label className="text-sm">Email</label>
//             <input
//               name="email"
//               required
//               type="email"
//               className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800"
//             />
//           </div>

//          {/* Logo Upload */}
// <div>
//   <label className="text-sm">App Logo</label>

//   <input
//     type="file"
//     accept="image/*"
//     required
//     onChange={(e) => {
//       const file = e.target.files ? e.target.files[0] : null;

//       if (file) {
//         setLogo(file);
//         setPreview(URL.createObjectURL(file));
//       }
//     }}
//     className="w-full mt-2"
//   />

//   {/* 🔥 Preview Section */}
//   {preview && (
//     <div className="mt-4 flex items-center gap-4">
//       <img
//         src={preview}
//         alt="Logo Preview"
//         className="w-24 h-24 object-cover rounded-xl border shadow"
//       />

//       <button
//         type="button"
//         onClick={() => {
//           setLogo(null);
//           setPreview(null);
//         }}
//         className="text-red-500 text-sm"
//       >
//         Remove
//       </button>
//     </div>
//   )}
// </div>

//           {/* Sub Type (Optional) */}
//           {defaultAppType === "mart" && (
//             <div>
//               <label className="text-sm">Sub App Type</label>
//               <select
//                 name="subType"
//                 required
//                 className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800"
//               >
//                 <option value="martuser">Mart User</option>
//                 <option value="martstore">Mart Store</option>
//                 <option value="martdelivery">Mart Delivery</option>
//               </select>
//             </div>
//           )}

//           {defaultAppType === "ecommerce" && (
//             <div>
//               <label className="text-sm">Sub App Type</label>
//               <select
//                 name="subType"
//                 required
//                 className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800"
//               >
//                 <option value="ecommerceuser">User App</option>
//                 <option value="ecommercestore">Store App</option>
//                 <option value="ecommercedelivery">Delivery App</option>
//               </select>
//             </div>
//           )}

//           <div className="flex justify-end gap-4 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-2 bg-gray-200 rounded-lg"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={loading}
//               className="px-5 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               {loading ? "Building..." : "Create App"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateAppModal;


// function onBuildStarted(taskId: any) {
//   throw new Error("Function not implemented.");
// }

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Props {
  onClose: () => void;
  defaultAppType: string;
  onBuildStarted: (taskId: string) => void;
}

const CreateAppModal = ({
  onClose,
  defaultAppType,
  onBuildStarted,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const API = "http://localhost:8001/api";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData(e.currentTarget);
      formData.append("app_type", defaultAppType);
      if (logo) formData.append("logo", logo);

      const res = await fetch(`${API}/build/start`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Build failed");
        return;
      }

      if (data.taskId) {
        onBuildStarted(data.taskId);
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl rounded-2xl p-8">

        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">
            Create {defaultAppType} App
          </h2>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="app_name"
            placeholder="App Name"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="domain"
            placeholder="https://example.com"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg"
          />

          {/* <input
            type="file"
            accept="image/*"
            required
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setLogo(file);
            }}
          /> */}
                    {/* Logo Upload */}
 <div>
   <label className="text-sm">App Logo</label>

   <input
    type="file"
    accept="image/*"
     required
    onChange={(e) => {
       const file = e.target.files ? e.target.files[0] : null;

       if (file) {
         setLogo(file);
         setPreview(URL.createObjectURL(file));
       }
     }}
     className="w-full mt-2"
   />

  {/* 🔥 Preview Section */}
   {preview && (
     <div className="mt-4 flex items-center gap-4">
       <img
         src={preview}
         alt="Logo Preview"
         className="w-24 h-24 object-cover rounded-xl border shadow"
       />

      <button
        type="button"
         onClick={() => {
           setLogo(null);
           setPreview(null);
         }}
         className="text-red-500 text-sm"
       >
         Remove
       </button>
     </div>
   )}
 </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-gray-200 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg"
            >
              {loading ? "Starting..." : "Create App"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAppModal;