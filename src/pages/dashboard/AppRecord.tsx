import { useEffect, useState } from "react";

interface AppRecord {
  id: number;
  app_name: string;
  app_type: string;
  domain: string;
  status: string;
  apk_url: string;
  created_at: string;
}

const AppRecord = () => {
  const [apps, setApps] = useState<AppRecord[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const API = "http://localhost:8001/api";

  const fetchApps = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(
      `${API}/apps?page=${page}&search=${search}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();

    setApps(data.data);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchApps();
  }, [page, search]);

  const deleteApp = async (id: number) => {
    const token = localStorage.getItem("token");

    await fetch(`${API}/apps/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchApps();
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        App Records
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search app..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 border rounded-lg w-64"
      />

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="p-4 text-left">App Name</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Domain</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Created</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {apps.map((app) => (
              <tr key={app.id} className="border-t">
                <td className="p-4 font-medium">
                  {app.app_name}
                </td>

                <td className="p-4">
                  {app.app_type}
                </td>

                <td className="p-4 text-blue-600">
                  {app.domain}
                </td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      app.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : app.status === "failed"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="p-4 text-gray-500">
                  {new Date(app.created_at).toLocaleString()}
                </td>

                <td className="p-4 space-x-2">
                  {app.status === "completed" && (
                    <a
                      href={app.apk_url}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      Download
                    </a>
                  )}

                  <button
                    onClick={() => deleteApp(app.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default AppRecord;