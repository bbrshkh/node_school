const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name:{
        type: String
    },
    subject:{
        type: String
    },
    class:{
        type: Number
    },
    exp:{
        type: Number
    },
    salary:{
        type: Number
    }
})

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;