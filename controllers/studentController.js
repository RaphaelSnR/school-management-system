const Student = require('../models/Student');
const Class = require('../models/Class');

// Add Student
exports.addStudent = async (req, res) => {
    try {
        const { name, age, classId } = req.body;
        const student = new Student({ name, age, classId });
        await student.save();
        
        // Assign student to class
        await Class.findByIdAndUpdate(classId, { $push: { students: student._id } });
        
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// List all Students
exports.listStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('classId');
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update Student
exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        res.status(200).json({ message: "Student deleted", student });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Assign Grade to Subject
exports.assignGrade = async (req, res) => {
    try {
        const { studentId, subjectId, grade } = req.body;
        const student = await Student.findById(studentId);
        student.grades.push({ subject: subjectId, grade });
        await student.save();
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
