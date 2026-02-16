import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthLayout from "./AuthLayout";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 transition-colors">

        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
          Create an account
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Full name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              placeholder="name@company.com"
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

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Confirm password
            </label>
            <input
              type="password"
              className="w-full mt-2 p-3 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <input type="checkbox" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            I accept the{" "}
            <a href="#" className="text-blue-600 dark:text-blue-400">
              Terms and Conditions
            </a>
          </span>
        </div>

        <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition">
          Create an account
        </button>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 dark:text-blue-400">
            Sign in
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
