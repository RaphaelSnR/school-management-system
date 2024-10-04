const Teacher = require('../models/Teacher');

// Add Teacher
exports.addTeacher = async (req, res) => {
    try {
        const { name, subjectId } = req.body;
        const teacher = new Teacher({ name, subjectId });
        await teacher.save();
        res.status(201).json(teacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// List All Teachers
exports.listTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find().populate('subjectId');
        res.status(200).json(teachers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update Teacher
exports.updateTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(teacher);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Teacher
exports.deleteTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await Teacher.findByIdAndDelete(id);
        res.status(200).json({ message: 'Teacher deleted', teacher });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
