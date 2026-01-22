import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { studentsAPI } from '../services/studentsAPI';

const StudentRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dateOfBirth: '',
    gender: '',
    address: { city: '', state: '' },
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
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'city' || name === 'state') {
      setFormData({
        ...formData,
        address: { ...formData.address, [name]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await studentsAPI.create(formData);
    alert('Registration Successful!');
    navigate('/attendance');
  };

  const Input = ({ label, ...props }) => (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>
  );

  const Select = ({ label, children, ...props }) => (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <select
        {...props}
        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
      >
        {children}
      </select>
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 mt-20">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
            Student Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Personal Info */}
            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                👤 Personal Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Full Name" name="name" required onChange={handleChange} />
                <Input label="Email" name="email" type="email" required onChange={handleChange} />
                <Input label="Mobile" name="mobile" required onChange={handleChange} />
                <Input label="Date of Birth" type="date" name="dateOfBirth" required onChange={handleChange} />

                <Select label="Gender" name="gender" required onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>

                <Input label="City" name="city" required onChange={handleChange} />
                <Input label="State" name="state" required onChange={handleChange} />
              </div>
            </section>

            {/* Academic Info */}
            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                🎓 Academic Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="College Name" name="collegeName" required onChange={handleChange} />
                <Input label="Course" name="course" required onChange={handleChange} />
                <Input label="Branch" name="branch" required onChange={handleChange} />
                <Input label="Current Semester" type="number" name="currentSemester" required onChange={handleChange} />
                <Input label="Passing Year" type="number" name="passingYear" required onChange={handleChange} />
                <Input label="CGPA" type="number" step="0.1" name="cgpa" required onChange={handleChange} />
              </div>
            </section>

            {/* Internship Info */}
            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                💼 Internship Preferences
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Internship Course" name="internshipType" required onChange={handleChange} />

                <Select label="Duration" name="internshipDuration" required onChange={handleChange}>
                  <option value="">Select</option>
                  <option>1 month</option>
                  <option>3 months</option>
                  <option>6 months</option>
                </Select>

                <Input label="Preferred Start Date" type="date" name="preferredStartDate" required onChange={handleChange} />

                <Select label="Mode" name="mode" required onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Hybrid</option>
                </Select>

                <Select label="Type" name="type" required onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Regular</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </Select>
              </div>
            </section>

            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                🚀 Register Now
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default StudentRegistration;
