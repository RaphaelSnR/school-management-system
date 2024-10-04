const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    grades: [{
        subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
        grade: String
    }]
});

module.exports = mongoose.model('Student', studentSchema);
