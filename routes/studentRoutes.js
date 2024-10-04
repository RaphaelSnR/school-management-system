const express = require('express');
const { addStudent, listStudents, updateStudent, deleteStudent, assignGrade } = require('../controllers/studentController');
const router = express.Router();

router.post('/add', addStudent);
router.get('/', listStudents);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
router.post('/assign-grade', assignGrade);

module.exports = router;
