const mongoose = require('mongoose');
const { Schema } = mongoose;

const staffSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
mongoose.model('staff', staffSchema);