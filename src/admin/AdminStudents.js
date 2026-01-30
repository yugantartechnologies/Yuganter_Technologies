import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { studentsAPI } from '../services/studentsAPI';

const AdminStudents = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dateOfBirth: '',
    gender: '',
    type: 'Student',
    address: {
      city: '',
      state: ''
    },
    collegeName: '',
    course: '',
    branch: '',
    currentSemester: '',
    passingYear: '',
    cgpa: '',
    internshipType: '',
    internshipDuration: '',
    preferredStartDate: '',
    mode: '',
  });

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/admin/login');
    } else {
      loadStudents();
    }
  }, [navigate]);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const response = await studentsAPI.getAll();
      setStudents(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested address fields
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEditing) {
        const updated = await studentsAPI.update(editingStudent._id, formData);
        setStudents((prev) =>
          prev.map((s) => (s._id === updated._id ? updated : s))
        );
        setIsEditing(false);
      } else {
        const maxRoll =
          students.length > 0
            ? Math.max(...students.map((s) => parseInt(s.rollNo) || 0))
            : 0;
        const newStudent = await studentsAPI.create({
          ...formData,
          rollNo: (maxRoll + 1).toString(),
        });
        setStudents((prev) => [...prev, newStudent]);
      }

      setShowModal(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        dateOfBirth: '',
        gender: '',
        type: 'Student',
        address: {
          city: '',
          state: ''
        },
        collegeName: '',
        course: '',
        branch: '',
        currentSemester: '',
        passingYear: '',
        cgpa: '',
        internshipType: '',
        internshipDuration: '',
        preferredStartDate: '',
        mode: '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (student) => {
    setIsEditing(true);
    setEditingStudent(student);
    setFormData(student);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete student?')) return;
    await studentsAPI.delete(id);
    setStudents((prev) => prev.filter((s) => s._id !== id));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingStudent(null);
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      dateOfBirth: '',
      gender: '',
      type: 'Student',
      address: {
        city: '',
        state: ''
      },
      collegeName: '',
      course: '',
      branch: '',
      currentSemester: '',
      passingYear: '',
      cgpa: '',
      internshipType: '',
      internshipDuration: '',
      preferredStartDate: '',
      mode: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-6 lg:p-8">
        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4 flex items-center justify-between">
          <button
            className="bg-blue-600 text-white p-2 rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-xl font-bold text-gray-800">Manage Students</h1>
        </div>

        {/* Desktop Title */}
        <div className="hidden md:flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manage Students</h1>
          <div className="text-sm text-gray-600">
            Total Students: <span className="font-semibold text-blue-600">{students.length}</span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6 flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-semibold">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Add Student Button */}
        <div className="mb-8">
          <button
            onClick={() => {
              setIsEditing(false);
              setEditingStudent(null);
              setFormData({
                name: '',
                email: '',
                mobile: '',
                dateOfBirth: '',
                gender: '',
                type: 'Student',
                address: {
                  city: '',
                  state: ''
                },
                collegeName: '',
                course: '',
                branch: '',
                currentSemester: '',
                passingYear: '',
                cgpa: '',
                internshipType: '',
                internshipDuration: '',
                preferredStartDate: '',
                mode: '',
              });
              setShowModal(true);
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-800 font-semibold shadow-md transition-all duration-200 flex items-center gap-2"
          >
            <span className="text-xl">➕</span> Add New Student
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto my-8">
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 md:p-6 flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold">
                  {isEditing ? 'Edit Student' : 'Add New Student'}
                </h2>
                <button
                  onClick={handleCancel}
                  className="text-2xl font-bold hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 md:p-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Personal Information Section */}
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Personal Information</h3>
                  </div>
                  
                  <input
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="mobile"
                    type="tel"
                    placeholder="Mobile Number *"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="dateOfBirth"
                    type="date"
                    placeholder="Date of Birth *"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Gender *</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Student">Student</option>
                    <option value="Internship">Internship</option>
                  </select>

                  {/* Address Section */}
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3 mt-4">Address</h3>
                  </div>
                  
                  <input
                    name="address.city"
                    placeholder="City *"
                    value={formData.address.city}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="address.state"
                    placeholder="State *"
                    value={formData.address.state}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  {/* College & Academic Information */}
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3 mt-4">Academic Information</h3>
                  </div>
                  
                  <input
                    name="collegeName"
                    placeholder="College Name *"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="course"
                    placeholder="Course *"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="branch"
                    placeholder="Branch *"
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="currentSemester"
                    type="number"
                    placeholder="Current Semester *"
                    value={formData.currentSemester}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="passingYear"
                    type="number"
                    placeholder="Passing Year *"
                    value={formData.passingYear}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="cgpa"
                    type="number"
                    step="0.01"
                    placeholder="CGPA *"
                    value={formData.cgpa}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  {/* Internship Information */}
                  <div className="lg:col-span-3">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3 mt-4">Internship Information</h3>
                  </div>
                  
                  <input
                    name="internshipType"
                    placeholder="Internship Type *"
                    value={formData.internshipType}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="internshipDuration"
                    placeholder="Internship Duration (e.g., 3 months) *"
                    value={formData.internshipDuration}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    name="preferredStartDate"
                    type="date"
                    placeholder="Preferred Start Date *"
                    value={formData.preferredStartDate}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Mode *</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>

                  {/* Buttons */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 font-semibold"
                    >
                      {loading ? 'Processing...' : isEditing ? 'Update Student' : 'Add Student'}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE CARDS */}
        <div className="md:hidden space-y-4">
          {students.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-500 text-lg">📚 No students found</p>
              <p className="text-gray-400 text-sm mt-1">Click "Add New Student" to get started</p>
            </div>
          ) : (
            students.map((s) => (
              <div key={s._id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-gray-800 text-lg">{s.name}</p>
                    <p className="text-sm text-gray-600">{s.course}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${s.type === 'Internship' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                    {s.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-xs text-gray-700 mb-4">
                  <p><span className="font-semibold text-sm">📧 Email:</span> {s.email}</p>
                  <p><span className="font-semibold text-sm">📱 Mobile:</span> {s.mobile}</p>
                  <p><span className="font-semibold text-sm">🏫 College:</span> {s.collegeName}</p>
                  <p><span className="font-semibold text-sm">📚 Branch:</span> {s.branch}</p>
                  <p><span className="font-semibold text-sm">⭐ CGPA:</span> {s.cgpa}</p>
                  <p><span className="font-semibold text-sm">📍 City:</span> {s.address?.city}</p>
                </div>
                
                <div className="flex gap-3 pt-3 border-t border-gray-200">
                  <button 
                    onClick={() => handleEdit(s)} 
                    className="flex-1 bg-blue-50 text-blue-600 py-2 rounded font-semibold hover:bg-blue-100 transition-colors"
                  >
                    ✏️ Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(s._id)} 
                    className="flex-1 bg-red-50 text-red-600 py-2 rounded font-semibold hover:bg-red-100 transition-colors"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          {students.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500 text-lg">📚 No students found</p>
              <p className="text-gray-400 text-sm mt-1">Click "Add New Student" to get started</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Name</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Email</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Mobile</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Course</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Branch</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">College</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">CGPA</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">City</th>
                    <th className="p-4 text-left text-sm font-bold text-gray-700">Type</th>
                    <th className="p-4 text-center text-sm font-bold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.map((s) => (
                    <tr key={s._id} className="hover:bg-blue-50 transition-colors">
                      <td className="p-4 text-sm font-medium text-gray-900">{s.name}</td>
                      <td className="p-4 text-sm text-gray-700">{s.email}</td>
                      <td className="p-4 text-sm text-gray-700">{s.mobile}</td>
                      <td className="p-4 text-sm text-gray-700">{s.course}</td>
                      <td className="p-4 text-sm text-gray-700">{s.branch}</td>
                      <td className="p-4 text-sm text-gray-700">{s.collegeName}</td>
                      <td className="p-4 text-sm text-gray-700">{s.cgpa}</td>
                      <td className="p-4 text-sm text-gray-700">{s.address?.city}</td>
                      <td className="p-4 text-center">
                        <span className={`text-xs px-3 py-1 rounded-full font-bold ${s.type === 'Internship' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                          {s.type}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleEdit(s)}
                            className="bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100 font-semibold text-sm transition-colors"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => handleDelete(s._id)}
                            className="bg-red-50 text-red-600 px-3 py-1 rounded hover:bg-red-100 font-semibold text-sm transition-colors"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminStudents;
