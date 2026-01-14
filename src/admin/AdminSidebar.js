import { NavLink } from "react-router-dom";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen, onLogout }) {


  const linkClass = ({ isActive }) =>
    `flex items-center px-3 py-2 rounded-md transition font-medium
     ${isActive ? "md:bg-grey bg-blue text-white" : "md:text-white text-blue hover:bg-red/30 hover:text-brandOrange"}`;


  return (
    <>
      {/* OVERLAY (Mobile Only) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-10"
        ></div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          md:bg-blue bg-teal-600 text-white md:w-64 w-full p-6 md:pt-24 
          fixed md:static top-[195px] left-0 h-100 z-20
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-y-[1px]" : "-translate-y-[500px] md:translate-y-0"}
        `}
      >
        <h2 className="text-2xl font-brand font-bold hidden md:block text-white mb-2 ml-1">
          Admin Panel
        </h2>

        <nav className="space-y-2" onClick={() => setSidebarOpen(false)}>
          <NavLink to="/admin" end className={linkClass}>
            <i className="fa-solid fa-gauge mr-2"></i> Dashboard
          </NavLink>

          <NavLink to="/admin/course-inquiries" className={linkClass}>
            <i className="fa-solid fa-envelope mr-2"></i> Course Inquiries
          </NavLink>

          <NavLink to="/admin/general-inquiries" className={linkClass}>
            <i className="fa-solid fa-comments mr-2"></i> General Inquiries
          </NavLink>

          <NavLink to="/admin/internships" className={linkClass}>
            <i className="fa-solid fa-users mr-2"></i> Internship Applications
          </NavLink>

          <button onClick={() => { if (window.confirm('Are you sure you want to logout?')) onLogout(); }} className={linkClass}>
            <i className="fa-solid fa-right-from-bracket mr-2"></i> Logout
          </button>
        </nav>
      </aside>
    </>
  );
}
