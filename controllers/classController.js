const Class = require('../models/Class');
const Student = require('../models/Student');

// Add Class
exports.addClass = async (req, res) => {
    try {
        const { name } = req.body;
        const classObj = new Class({ name });
        await classObj.save();
        res.status(201).json(classObj);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// List All Classes
exports.listClasses = async (req, res) => {
    try {
        const classes = await Class.find().populate('students subjects');
        res.status(200).json(classes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Assign Students to Class
exports.assignStudentToClass = async (req, res) => {
    try {
        const { classId, studentId } = req.body;
        const classObj = await Class.findById(classId);
        const student = await Student.findById(studentId);

        if (classObj && student) {
            classObj.students.push(studentId);
            await classObj.save();
            res.status(200).json({ message: 'Student assigned to class', classObj });
        } else {
            res.status(404).json({ message: 'Class or Student not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Assign Subjects to Class
exports.assignSubjectsToClass = async (req, res) => {
    try {
        const { classId, subjectIds } = req.body; // Expecting an array of subject IDs
        const classObj = await Class.findById(classId);

        if (classObj) {
            classObj.subjects = classObj.subjects.concat(subjectIds);
            await classObj.save();
            res.status(200).json({ message: 'Subjects assigned to class', classObj });
        } else {
            res.status(404).json({ message: 'Class not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Class
exports.deleteClass = async (req, res) => {
    try {
        const { id } = req.params;
        const classObj = await Class.findByIdAndDelete(id);
        res.status(200).json({ message: 'Class deleted', classObj });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
