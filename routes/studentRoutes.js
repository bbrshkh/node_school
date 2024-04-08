const express = require('express');

const router = express.Router();

const Student = require('../models/Student');

router.post('/', async(req, res)=>{
    try {
        const data = req.body;
        const newStudent = new Student(data);
        const response = await newStudent.save();
        console.log('New Student data saved successfully');
        res.status(200).json(response);
    } catch (error) {
        console.log('Data not saved:',error);
        res.status(500).json({error});
    }
})

router.get('/', async(req, res)=>{
    try {
        const data = await Student.find();
        console.log('Data fetched successfully')
        res.status(200).json(data);
    } catch (error) {
        console.log('Error in Fetching Students Data');
        res.status(500).json({error});
    }
})

router.put('/:id', async(req, res)=>{
    try {
        const studentId = req.params.id;
        const data = req.body;
        const response = await Student.findByIdAndUpdate(studentId, data, {
            new: true,
            runValidators: true
        })
        if(!response){
            console.log('Student not found');
            res.status(404).json({error:'Student not found'});
        }
        console.log('Data updated succesfully');
        res.status(200).json(response);
    } catch (error) {
        console.log('Error:',error);
        res.status(500).json({error:'internal server error'});
    }

})

router.delete('/id', async(req, res)=>{
    try {
        const studentId = req.params.id;
        const response = await Student.findByIdAndDelete(studentId);
        if(!response){
            res.status(404).json({error: 'Student not found'});
        }
        console.log('Student data deleted');
        res.status(200).json({response})
    } catch (error) {
        console.log('error:', error);
        res.status(200).json({error})
    }
})

module.exports = router;