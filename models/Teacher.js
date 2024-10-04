const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }
});

module.exports = mongoose.model('Teacher', teacherSchema);
