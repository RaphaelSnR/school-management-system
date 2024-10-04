const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

// Route to add a new subject
router.post('/add', subjectController.addSubject);

// Route to list all subjects
router.get('/', subjectController.listSubjects);

// Route to update a subject by ID
router.put('/update/:id', subjectController.updateSubject);

// Route to delete a subject by ID
router.delete('/delete/:id', subjectController.deleteSubject);

module.exports = router;
