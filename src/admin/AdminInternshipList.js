import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminInternshipList = () => {
  const [applications, setApplications] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("internshipApplications") || "[]");
    if (apps.length === 0) {
      const staticData = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "+91 9876543210",
          internship: "Web Development Internship",
          experience: "Beginner",
          message: "Excited to learn!",
          submittedAt: new Date().toISOString(),
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "+91 9876543211",
          internship: "Python Development Internship",
          experience: "Intermediate",
          message: "Looking forward to the opportunity.",
          submittedAt: new Date(Date.now() - 86400000).toISOString(),
        },
      ];
      setApplications(staticData);
    } else {
      setApplications(apps);
    }
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("adminLoggedIn");
      navigate("/admin/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-8">
        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          >
            ☰ Menu
          </button>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Internship Applications
        </h1>

        {/* No Data */}
        {applications.length === 0 ? (
          <p className="text-gray-600">No applications found.</p>
        ) : (
          <>
            {/* ✅ Desktop Table */}
            <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Name", "Email", "Phone", "Internship", "Experience", "Submitted At"].map(
                      (head) => (
                        <th
                          key={head}
                          className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase"
                        >
                          {head}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{app.name}</td>
                      <td className="px-6 py-4 text-gray-600">{app.email}</td>
                      <td className="px-6 py-4 text-gray-600">{app.phone}</td>
                      <td className="px-6 py-4 text-gray-600">{app.internship}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                          {app.experience}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-sm">
                        {new Date(app.submittedAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Mobile Cards */}
            <div className="md:hidden space-y-4">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="bg-white rounded-xl shadow p-4 space-y-2"
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg">{app.name}</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {app.experience}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> {app.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Phone:</strong> {app.phone}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Internship:</strong> {app.internship}
                  </p>
                  <p className="text-xs text-gray-500">
                    Submitted: {new Date(app.submittedAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminInternshipList;
