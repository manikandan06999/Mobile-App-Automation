import { useEffect, useState } from "react";

interface Profile {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const API = "http://localhost:8001/api";

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow border max-w-xl">

        <div className="mb-6">
          <p className="text-sm text-gray-500">User ID</p>
          <p className="text-lg font-medium">#{profile.id}</p>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-500">Name</p>
          <p className="text-lg font-medium">{profile.name}</p>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-500">Email</p>
          <p className="text-lg font-medium">{profile.email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Joined</p>
          <p className="text-lg font-medium">
            {new Date(profile.created_at).toLocaleDateString()}
          </p>
        </div>

      </div>
    </>
  );
};

export default ProfilePage;