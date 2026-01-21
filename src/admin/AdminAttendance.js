import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import QRCode from 'qrcode';
import { studentsAPI } from '../services/studentsAPI';
import { attendanceAPI } from '../services/attendanceAPI';

const AdminAttendance = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const expectedQrData = useRef('');

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/admin/login');
    } else {
      loadData();
    }
  }, [navigate]);

  const loadData = async () => {
    try {
      // Load attendance records from API
      const attendanceResponse = await attendanceAPI.getAll();
      setAttendanceRecords(attendanceResponse);
      
      // Load students using API
      const studentsResponse = await studentsAPI.getAll();
      setStudents(studentsResponse);
    } catch (err) {
      console.error('Error loading data:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const generateQRCode = async () => {
    if (!selectedStudent) {
      alert('Please select a student.');
      return;
    }
    
    const student = students.find(s => s._id === selectedStudent);
    if (!student) {
      alert('Selected student not found.');
      return;
    }
    
    const data = `ATTENDANCE:${student.name}:${student.rollNo}:${new Date().toISOString()}`;
    expectedQrData.current = data;
    try {
      const url = await QRCode.toDataURL(data);
      setQrCodeUrl(url);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const clearQR = () => {
    setQrCodeUrl('');
    setSelectedStudent('');
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
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Attendance Management</h1>
        
        {/* QR Code Generation Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Generate QR Code for Student</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Student
            </label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Choose a student...</option>
              {students.map((student) => (
                <option key={student._id} value={student._id}>
                  {student.rollNo} - {student.name} ({student.course})
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex gap-2 mb-4">
            <button
              onClick={generateQRCode}
              disabled={!selectedStudent}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Generate QR Code
            </button>
            {qrCodeUrl && (
              <button
                onClick={clearQR}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Clear
              </button>
            )}
          </div>
          
          {qrCodeUrl && (
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                QR Code for {students.find(s => s._id === selectedStudent)?.name} 
                (Roll No: {students.find(s => s._id === selectedStudent)?.rollNo})
              </p>
              <img src={qrCodeUrl} alt="QR Code" className="mx-auto border-2 border-gray-300 rounded" />
              <p className="text-xs text-gray-500 mt-2">Students can scan this QR code to mark their attendance</p>
            </div>
          )}
        </div>
        
        {/* Attendance Records Section */}
        <h2 className="text-xl font-semibold mb-4">Attendance Records</h2>
        
        {attendanceRecords.length === 0 ? (
          <p className="text-gray-700">No attendance records found.</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendanceRecords.map((record, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {record.studentName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.studentId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(record.qrTimestamp)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAttendance;