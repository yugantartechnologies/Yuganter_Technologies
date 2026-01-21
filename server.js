const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for students (replace with database in production)
let students = [
  { id: 1, name: 'John Doe', rollNo: '001', course: 'Full Stack' },
  { id: 2, name: 'Jane Smith', rollNo: '002', course: 'Data Science' },
];

// In-memory storage for attendances
let attendances = [];

// GET /api/students - Get all students
app.get('/api/students', (req, res) => {
  res.json({ status: 200, data: students });
});

// POST /api/students - Add a new student
app.post('/api/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    ...req.body,
  };
  students.push(newStudent);
  res.json({ status: 201, data: newStudent });
});

// PUT /api/students/:id - Update a student
app.put('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...req.body };
    res.json({ status: 200, data: students[index] });
  } else {
    res.status(404).json({ status: 404, message: 'Student not found' });
  }
});

// DELETE /api/students/:id - Delete a student
app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    const deletedStudent = students.splice(index, 1);
    res.json({ status: 200, data: deletedStudent[0] });
  } else {
    res.status(404).json({ status: 404, message: 'Student not found' });
  }
});

// GET /api/attendances - Get all attendances
app.get('/api/attendances', (req, res) => {
  res.json(attendances);
});

// POST /api/attendances - Add a new attendance
app.post('/api/attendances', (req, res) => {
  const newAttendance = {
    _id: Date.now().toString(), // Simple ID generation
    ...req.body,
    createdAt: new Date().toISOString(),
  };
  attendances.push(newAttendance);
  res.json(newAttendance);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});