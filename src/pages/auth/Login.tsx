import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login
    localStorage.setItem("user", "loggedIn");

    // Redirect to home
    navigate("/");
    
    // Refresh page so navbar updates immediately
    window.location.reload();
  };

  return (
    <AuthLayout>
      <div id="login" className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 transition-colors">

        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
          Sign in to your account
        </h2>

        <div className="space-y-6">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@appy.com"
              className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Password
            </label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-blue-600 dark:text-blue-400">
              Forgot password?
            </a>
          </div>

          {/* UPDATED BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
          >
            Sign in
          </button>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account yet?{" "}
            <a href="/register" className="text-blue-600 dark:text-blue-400">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
