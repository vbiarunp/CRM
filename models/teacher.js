const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
        es_type: 'completion',
        es_index_analyzer: 'simple',
        es_search_analyzer: 'simple',
        es_payloads: true
    },
    qualification: {
        type: String,
        required: true
    }
});

teacherSchema.plugin(mongoosastic, {
    hosts: [
        'localhost:5000'
    ]
});
mongoose.model('teacher', teacherSchema);