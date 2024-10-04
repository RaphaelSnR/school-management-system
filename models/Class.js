const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: String,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }]
});

module.exports = mongoose.model('Class', classSchema);
