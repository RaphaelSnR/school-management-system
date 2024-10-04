const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Route to add a new teacher
router.post('/add', teacherController.addTeacher);

// Route to list all teachers
router.get('/', teacherController.listTeachers);

// Route to update a teacher by ID
router.put('/update/:id', teacherController.updateTeacher);

// Route to delete a teacher by ID
router.delete('/delete/:id', teacherController.deleteTeacher);

module.exports = router;
