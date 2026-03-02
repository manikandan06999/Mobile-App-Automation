// import { useEffect, useState } from "react";

// interface Props {
//   taskId: string;
//   onClose: () => void;
// }

// const BuildProgressModal = ({ taskId, onClose }: Props) => {
//   const [progress, setProgress] = useState(0);
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");

//   const API = "http://localhost:8001/api";
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const interval = setInterval(async () => {
//       const res = await fetch(`${API}/build/status/${taskId}`, {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

//       const data = await res.json();

//       setProgress(data.progress || 0);
//       setMessage(data.message || "");
//       setStatus(data.status);

//       if (data.status === "success" || data.status === "failed") {
//         clearInterval(interval);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [taskId]);

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
//       <div className="bg-white w-[400px] p-6 rounded-xl">

//         <h2 className="text-lg font-semibold mb-4">
//           🚀 Building Your App
//         </h2>

//         <div className="w-full bg-gray-200 rounded-full h-4">
//           <div
//             className="bg-blue-600 h-4 rounded-full transition-all"
//             style={{ width: `${progress}%` }}
//           />
//         </div>

//         <p className="mt-3 text-sm text-gray-600">
//           {message} ({progress}%)
//         </p>

//         {status === "success" && (
//           <p className="text-green-600 mt-4">Build Completed 🎉</p>
//         )}

//         {status === "failed" && (
//           <p className="text-red-600 mt-4">Build Failed ❌</p>
//         )}

//         <button
//           onClick={onClose}
//           className="mt-4 text-sm text-gray-500"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BuildProgressModal;


import { useEffect, useRef, useState } from "react";

interface Props {
  taskId: string;
  onClose: () => void;
}

const BuildProgressModal = ({ taskId, onClose }: Props) => {
  const [displayProgress, setDisplayProgress] = useState(5);
  const [realProgress, setRealProgress] = useState(5);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const API = "http://localhost:8001/api";
  const token = localStorage.getItem("token");

const animationRef = useRef<ReturnType<typeof setInterval> | null>(null);
  /* ===============================
     1️⃣ Poll Backend
  =============================== */
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch(`${API}/build/status/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      setRealProgress(data.progress || 5);
      setMessage(data.message || "Its take few minutes...");
      setStatus(data.status);

      if (data.status === "success" || data.status === "failed") {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [taskId]);

  /* ===============================
     2️⃣ Smooth Animate Toward Real Progress
  =============================== */
  useEffect(() => {
    if (displayProgress < realProgress) {
      animationRef.current = setInterval(() => {
        setDisplayProgress((prev) => {
          if (prev >= realProgress) {
            if (animationRef.current)
              clearInterval(animationRef.current);
            return realProgress;
          }
          return prev + 1; // smooth step
        });
      }, 80); // speed of animation
    }

    return () => {
      if (animationRef.current)
        clearInterval(animationRef.current);
    };
  }, [realProgress]);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white w-[420px] p-6 rounded-xl shadow-xl">
        <h2 className="text-lg font-semibold mb-4">
          🚀 Building Your App
        </h2>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all"
            style={{ width: `${displayProgress}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-gray-600">
          {message} ({displayProgress}%)
        </p>

        {status === "success" && (
          <p className="text-green-600 mt-4">
            Build Completed 🎉
          </p>
        )}

        {status === "failed" && (
          <p className="text-red-600 mt-4">
            Build Failed ❌
          </p>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BuildProgressModal;