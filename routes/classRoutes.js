const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Route to add a new class
router.post('/add', classController.addClass);

// Route to list all classes
router.get('/', classController.listClasses);

// Route to assign a student to a class
router.post('/assign-student', classController.assignStudentToClass);

// Route to assign subjects to a class
router.post('/assign-subjects', classController.assignSubjectsToClass);

// Route to delete a class by ID
router.delete('/delete/:id', classController.deleteClass);

module.exports = router;
