import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import QRCode from 'qrcode';
import * as XLSX from 'xlsx';
import { studentsAPI } from '../services/studentsAPI';
import { attendanceAPI } from '../services/attendanceAPI';

const AdminAttendance = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [filterStudentId, setFilterStudentId] = useState('');
  const [filterStudentName, setFilterStudentName] = useState('');
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
      
      // Remove duplicate records
      const uniqueRecords = removeDuplicates(attendanceResponse);
      setAttendanceRecords(uniqueRecords);

      // Load students using API
      const studentsResponse = await studentsAPI.getAll();
      setStudents(studentsResponse);
    } catch (err) {
      console.error('Error loading data:', err);
    }
  };

  const removeDuplicates = (records) => {
    const seen = new Set();
    return records.filter((record) => {
      // Create a unique key based on studentId and just the date (DD/MM/YY format)
      const date = new Date(record.markedAt);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().slice(-2);
      const dateKey = `${day}/${month}/${year}`;
      
      const key = `${record.studentId}-${dateKey}`;
      
      if (seen.has(key)) {
        return false; // Duplicate found on same date, filter it out
      }
      seen.add(key);
      return true; // First occurrence on this date, keep it
    });
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
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const clearQR = () => {
    setQrCodeUrl('');
    setSelectedStudent('');
  };

  const getFilteredRecords = () => {
    let filtered = attendanceRecords;
    
    // Filter by date if selected
    if (selectedDate) {
      filtered = filtered.filter((record) => {
        const recordDate = new Date(record.markedAt).toISOString().split('T')[0];
        return recordDate === selectedDate;
      });
    }
    
    // Filter by student ID if selected
    if (filterStudentId) {
      filtered = filtered.filter((record) => {
        return record.studentId === filterStudentId;
      });
    }
    
    // Filter by student name if selected
    if (filterStudentName) {
      filtered = filtered.filter((record) => {
        return record.studentName === filterStudentName;
      });
    }
    
    return filtered;
  };

  const downloadExcel = () => {
    const filteredRecords = getFilteredRecords();
    
    if (filteredRecords.length === 0) {
      alert('No attendance records to download.');
      return;
    }

    // Prepare data for Excel
    const excelData = filteredRecords.map((record) => ({
      'Student Name': record.studentName,
      'Student ID': record.studentId,
      'Timestamp': formatDate(record.markedAt),
    }));

    // Create a new workbook
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Attendance');

    // Style the header row (optional - basic styling)
    ws['!cols'] = [{ wch: 20 }, { wch: 15 }, { wch: 20 }];

    // Generate filename with current date or selected date
    const dateForFilename = selectedDate || new Date().toISOString().split('T')[0];
    const filename = `Attendance_${dateForFilename}.xlsx`;

    // Download the file
    XLSX.writeFile(wb, filename);
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
       {/* Attendance Records Section */}
<h2 className="text-xl font-semibold mb-4">Attendance Records</h2>

{attendanceRecords.length === 0 ? (
  <p className="text-gray-700">No attendance records found.</p>
) : (
  <>
    {/* Filter and Download Section */}
    <div className="mb-6 bg-white shadow-md rounded-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Date Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            📅 Filter by Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Student ID Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            🆔 Filter by Student ID
          </label>
          <select
            value={filterStudentId}
            onChange={(e) => setFilterStudentId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All IDs</option>
            {[...new Set(attendanceRecords.map(r => r.studentId))].map((studentId) => (
              <option key={studentId} value={studentId}>
                {studentId}
              </option>
            ))}
          </select>
        </div>

        {/* Student Name Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            👤 Filter by Student Name
          </label>
          <select
            value={filterStudentName}
            onChange={(e) => setFilterStudentName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All Names</option>
            {[...new Set(attendanceRecords.map(r => r.studentName))].sort().map((studentName) => (
              <option key={studentName} value={studentName}>
                {studentName}
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-end gap-2">
          {(selectedDate || filterStudentId || filterStudentName) && (
            <button
              onClick={() => {
                setSelectedDate('');
                setFilterStudentId('');
                setFilterStudentName('');
              }}
              className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-sm font-medium"
            >
              ✕ Clear
            </button>
          )}
          <button
            onClick={downloadExcel}
            className="flex-1 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm font-medium"
          >
            📥 Download
          </button>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedDate || filterStudentId || filterStudentName) && (
        <div className="flex flex-wrap gap-2 text-xs">
          {selectedDate && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              📅 Date: {selectedDate}
            </span>
          )}
          {filterStudentId && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              🆔 ID: {filterStudentId}
            </span>
          )}
          {filterStudentName && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              👤 Name: {filterStudentName}
            </span>
          )}
        </div>
      )}
    </div>

    {/* Mobile View - Cards */}
    <div className="space-y-4 md:hidden">
      {getFilteredRecords().length === 0 ? (
        <p className="text-gray-700">No records found for selected date.</p>
      ) : (
        getFilteredRecords().map((record, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow border"
          >
            <p className="text-sm">
              <span className="font-semibold">Name:</span> {record.studentName}
            </p>
            <p className="text-sm">
              <span className="font-semibold">ID:</span> {record.studentId}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Time:</span> {formatDate(record.markedAt)}
            </p>
          </div>
        ))
      )}
    </div>

    {/* Desktop View - Table */}
    <div className="hidden md:block bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Student Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Student ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {getFilteredRecords().length === 0 ? (
            <tr>
              <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
                No records found for selected date.
              </td>
            </tr>
          ) : (
            getFilteredRecords().map((record, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {record.studentName}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {record.studentId}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {formatDate(record.markedAt)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </>
)}

      </div>
    </div>
  );
};

export default AdminAttendance;