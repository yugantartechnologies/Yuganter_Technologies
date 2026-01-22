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

  const [formData, setFormData] = useState({
    name: '',
    course: '',
    type: 'Student',
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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

      setFormData({ name: '', course: '', type: 'Student' });
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
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete student?')) return;
    await studentsAPI.delete(id);
    setStudents((prev) => prev.filter((s) => s._id !== id));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingStudent(null);
    setFormData({ name: '', course: '', type: 'Student' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-8">
        <button
          className="md:hidden bg-blue-600 text-white p-2 rounded mb-4"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">Manage Students</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* FORM */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {isEditing ? 'Edit Student' : 'Add Student'}
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Student Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            />
            <input
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleInputChange}
              className="border p-2 rounded"
              required
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="border p-2 rounded"
            >
              <option value="Student">Student</option>
              <option value="Internship">Internship</option>
            </select>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {isEditing ? 'Update' : 'Add'}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden space-y-4">
          {students.map((s) => (
            <div key={s._id} className="bg-white p-4 rounded shadow">
              <p><b>Roll:</b> {s.rollNo}</p>
              <p><b>Name:</b> {s.name}</p>
              <p><b>Course:</b> {s.course}</p>
              <span className="text-xs bg-blue-100 px-2 rounded">{s.type}</span>
              <div className="flex gap-4 mt-3">
                <button onClick={() => handleEdit(s)} className="text-blue-600">
                  Edit
                </button>
                <button onClick={() => handleDelete(s._id)} className="text-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left">Roll</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s._id} className="border-t">
                  <td className="p-3">{s.rollNo}</td>
                  <td className="p-3">{s.name}</td>
                  <td className="p-3">{s.course}</td>
                  <td className="p-3">{s.type}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleEdit(s)}
                      className="text-blue-600 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(s._id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AdminStudents;
