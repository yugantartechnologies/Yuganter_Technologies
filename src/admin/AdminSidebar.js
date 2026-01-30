import { NavLink } from "react-router-dom";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen, onLogout }) {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium text-sm
     ${isActive
        ? "bg-orange-500 text-white shadow-md"
        : "text-gray-200 hover:bg-blue-600 hover:text-white"
     }`;

  return (
    <>
      {/* Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-gradient-to-b from-blue-800 to-blue-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:sticky md:top-0
          shadow-xl
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-blue-700/50 bg-blue-900">
          <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
          <p className="text-xs text-blue-300 text-center mt-1">Yuganter Technologies</p>
        </div>

        {/* Links */}
        <nav
          className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="mb-2">
            <p className="text-xs font-semibold text-blue-300 uppercase px-4 py-2">Main</p>
            <NavLink to="/admin" end className={linkClass}>
              <i className="fa-solid fa-gauge w-5"></i> 
              <span>Dashboard</span>
            </NavLink>
          </div>

          <div className="mb-2">
            <p className="text-xs font-semibold text-blue-300 uppercase px-4 py-2">Inquiries</p>
            <NavLink to="/admin/course-inquiries" className={linkClass}>
              <i className="fa-solid fa-book w-5"></i> 
              <span>Course Inquiries</span>
            </NavLink>

            <NavLink to="/admin/general-inquiries" className={linkClass}>
              <i className="fa-solid fa-comments w-5"></i> 
              <span>General Inquiries</span>
            </NavLink>

            <NavLink to="/admin/service-inquiries" className={linkClass}>
              <i className="fa-solid fa-briefcase w-5"></i> 
              <span>Service Inquiries</span>
            </NavLink>
          </div>

          <div className="mb-2">
            <p className="text-xs font-semibold text-blue-300 uppercase px-4 py-2">Management</p>
            <NavLink to="/admin/internships" className={linkClass}>
              <i className="fa-solid fa-handshake w-5"></i> 
              <span>Internships</span>
            </NavLink>

            <NavLink to="/admin/students" className={linkClass}>
              <i className="fa-solid fa-user-graduate w-5"></i> 
              <span>Manage Students</span>
            </NavLink>

            <NavLink to="/admin/attendance" className={linkClass}>
              <i className="fa-solid fa-calendar-check w-5"></i> 
              <span>Attendance</span>
            </NavLink>
          </div>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-700/50 bg-blue-900">
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to logout?")) {
                onLogout();
              }
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 w-full rounded-lg
                       bg-red-600 hover:bg-red-700 text-white transition font-medium text-sm
                       shadow-md"
          >
            <i className="fa-solid fa-right-from-bracket"></i> 
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
