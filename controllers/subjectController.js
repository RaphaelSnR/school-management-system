const Subject = require('../models/Subject');

// Add Subject
exports.addSubject = async (req, res) => {
    try {
        const { name } = req.body;
        const subject = new Subject({ name });
        await subject.save();
        res.status(201).json(subject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// List All Subjects
exports.listSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update Subject
exports.updateSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const subject = await Subject.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(subject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Subject
exports.deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const subject = await Subject.findByIdAndDelete(id);
        res.status(200).json({ message: 'Subject deleted', subject });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
