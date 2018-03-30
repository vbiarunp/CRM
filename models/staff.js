const mongoose = require('mongoose');
const { Schema } = mongoose;

const staffSchema = new Schema({
    name: String
});

mongoose.model('staff', staffSchema);