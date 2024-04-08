const express = require('express');

const app = express();

const db = require('./db');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('hello world')
})

const teacherRoutes = require('./routes/teacherRoutes');

app.use('/teacher', teacherRoutes);

const studentRoutes = require('./routes/studentRoutes');

app.use('/student', studentRoutes);

app.listen(3000, ()=> console.log('server at 3000'));

