const express = require('express');

const router = express.Router();

const Teacher = require('../models/Teacher');

router.post('/', async(req, res)=>{
    try {
        const data = req.body;
        const newTeacher = new Teacher(data);
        const response = await newTeacher.save();
        console.log('New teacher data saved successfully');
        res.status(200).json(response);
    } catch (error) {
        console.log('Data not saved:',error);
        res.status(500).json({error});
    }
})

router.get('/', async(req, res)=>{
    try {
        const data = await Teacher.find();
        console.log('Data fetched successfully')
        res.status(200).json(data);
    } catch (error) {
        console.log('Error in Fetching Teachers Data');
        res.status(500).json({error});
    }
})

router.put('/:id', async(req, res)=>{
    try {
        const teacherId = req.params.id;
        const data = req.body;
        const response = await Teacher.findByIdAndUpdate(teacherId, data, {
            new: true,
            runValidators: true
        })
        if(!response){
            console.log('Teacher not found');
            res.status(404).json({error:'Teacher not found'});
        }
        console.log('Data updated succesfully');
        res.status(200).json(response);
    } catch (error) {
        console.log('Error:',error);
        res.status(500).json({error:'internal server error'});
    }

})

router.delete('/:id', async(req, res)=>{
    try {
        const teacherId = req.params.id;
        const response = await Teacher.findByIdAndDelete(teacherId);
        if(!response){
            res.status(404).json({error: 'Teacher not found'});
        }
        console.log('Teacher data deleted');
        res.status(200).json({response})
    } catch (error) {
        console.log('error:', error);
        res.status(200).json({error})
    }
})

module.exports = router;