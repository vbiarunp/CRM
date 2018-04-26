const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
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
staffSchema.plugin(mongoosastic);
mongoose.model('staff', staffSchema);