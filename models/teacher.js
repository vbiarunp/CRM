const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

mongoose.model('teacher', teacherSchema);