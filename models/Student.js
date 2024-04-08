const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type: String
    },
    grade:{
        type: String
    },
    class:{
        type: Number
    },
    rollnum:{
        type: Number
    },
    fees:{
        type: Number
    }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;