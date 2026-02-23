import { useState } from "react";

const SettingsPage = () => {
  const API = "http://localhost:8001/api";
  const token = localStorage.getItem("token");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const updateProfile = async () => {
    await fetch(`${API}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email }),
    });

    alert("Profile updated");
  };

  const changePassword = async () => {
    await fetch(`${API}/profile/password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    });

    alert("Password changed");
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="grid grid-cols-2 gap-10">

        {/* Update Profile */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border">
          <h2 className="font-semibold mb-4">
            Update Profile
          </h2>

          <input
            placeholder="Name"
            className="w-full p-2 mb-3 border rounded"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={updateProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>

        {/* Change Password */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border">
          <h2 className="font-semibold mb-4">
            Change Password
          </h2>

          <input
            type="password"
            placeholder="Old Password"
            className="w-full p-2 mb-3 border rounded"
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2 mb-3 border rounded"
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            onClick={changePassword}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Change Password
          </button>
        </div>

      </div>
    </>
  );
};

export default SettingsPage;