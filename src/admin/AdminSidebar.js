import { NavLink } from "react-router-dom";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen, onLogout }) {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md transition font-medium
     ${isActive
        ? "bg-blue-600 text-white"
        : "text-blue-600 md:text-white hover:bg-blue-500/20 hover:text-orange-400"
     }`;

  return (
    <>
      {/* Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-teal-600 md:bg-blue-700 text-white
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/20">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>

        {/* Links */}
        <nav
          className="p-4 space-y-2"
          onClick={() => setSidebarOpen(false)}
        >
          <NavLink to="/admin" end className={linkClass}>
            <i className="fa-solid fa-gauge"></i> Dashboard
          </NavLink>

          <NavLink to="/admin/course-inquiries" className={linkClass}>
            <i className="fa-solid fa-envelope"></i> Course Inquiries
          </NavLink>

          <NavLink to="/admin/general-inquiries" className={linkClass}>
            <i className="fa-solid fa-comments"></i> General Inquiries
          </NavLink>

          <NavLink to="/admin/internships" className={linkClass}>
            <i className="fa-solid fa-users"></i> Internship Applications
          </NavLink>

          <NavLink to="/admin/service-inquiries" className={linkClass}>
            <i className="fa-solid fa-briefcase"></i> Service Inquiries
          </NavLink>

          <NavLink to="/admin/attendance" className={linkClass}>
            <i className="fa-solid fa-calendar-check"></i> Attendance Records
          </NavLink>

          <NavLink to="/admin/students" className={linkClass}>
            <i className="fa-solid fa-user-graduate"></i> Manage Students
          </NavLink>

          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to logout?")) {
                onLogout();
              }
            }}
            className="flex items-center gap-2 px-4 py-2 w-full rounded-md text-left
                       hover:bg-red-500/20 hover:text-red-400 transition"
          >
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </nav>
      </aside>
    </>
  );
}
