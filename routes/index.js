const express = require('express');
const router = express.Router();

const teacherRoutes = require('./teacherRoutes');
const subjectRoutes = require('./subjectRoutes');
const classRoutes = require('./classRoutes');

// Routes for Teachers
router.use('/teachers', teacherRoutes);

// Routes for Subjects
router.use('/subjects', subjectRoutes);

// Routes for Classes
router.use('/classes', classRoutes);

module.exports = router;
