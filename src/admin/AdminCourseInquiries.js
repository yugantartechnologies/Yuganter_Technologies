import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminCourseInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  useEffect(() => {
    const inqs = JSON.parse(localStorage.getItem("courseInquiries") || "[]");
    if (inqs.length === 0) {
      const staticData = [
        {
          id: 1,
          name: "Alice Johnson",
          email: "alice@example.com",
          phone: "+91 9876543213",
          course: "Full Stack Development (MERN)",
          submittedAt: new Date().toISOString(),
        },
        {
          id: 2,
          name: "Bob Smith",
          email: "bob@example.com",
          phone: "+91 9876543214",
          course: "Python Development",
          submittedAt: new Date(Date.now() - 86400000).toISOString(),
        },
      ];
      setInquiries(staticData);
    } else {
      setInquiries(inqs);
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
        {/* Mobile Menu */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          >
            ☰ Menu
          </button>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Course Inquiries
        </h1>

        {inquiries.length === 0 ? (
          <p className="text-gray-600">No inquiries found.</p>
        ) : (
          <>
            {/* ✅ Desktop Table */}
            <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Name", "Email", "Phone", "Course", "Submitted At"].map(
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
                  {inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{inq.name}</td>
                      <td className="px-6 py-4 text-gray-600">{inq.email}</td>
                      <td className="px-6 py-4 text-gray-600">{inq.phone}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                          {inq.course}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(inq.submittedAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Mobile Cards */}
            <div className="md:hidden space-y-4">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="bg-white rounded-xl shadow p-4 space-y-2"
                >
                  <h3 className="font-semibold text-lg">{inq.name}</h3>

                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> {inq.email}
                  </p>

                  <p className="text-sm text-gray-600">
                    <strong>Phone:</strong> {inq.phone}
                  </p>

                  <p className="text-sm text-gray-600">
                    <strong>Course:</strong>{" "}
                    <span className="text-green-700 font-medium">
                      {inq.course}
                    </span>
                  </p>

                  <p className="text-xs text-gray-500">
                    Submitted:{" "}
                    {new Date(inq.submittedAt).toLocaleString()}
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

export default AdminCourseInquiries;
