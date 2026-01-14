import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            ☰
          </button>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Dashboard</h1>
        <p className="text-gray-700 mb-4">Welcome to the admin panel. Here you can manage courses, services, and more.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 p-3 md:p-4 rounded-lg">
            <h2 className="text-lg md:text-xl font-semibold">Manage Courses</h2>
            <p>View and edit course details.</p>
          </div>
          <div className="bg-green-100 p-3 md:p-4 rounded-lg">
            <h2 className="text-lg md:text-xl font-semibold">Manage Services</h2>
            <p>Update service offerings.</p>
          </div>
          <div className="bg-yellow-100 p-3 md:p-4 rounded-lg">
            <h2 className="text-lg md:text-xl font-semibold">View Analytics</h2>
            <p>Check website statistics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;