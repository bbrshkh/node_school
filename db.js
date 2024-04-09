const mongoose = require('mongoose');

require('dotenv').config()

// const mongoURL = 'mongodb://localhost:27017/school';
// const mongoURL = 'mongodb+srv://school:school123@cluster0.mr6vz9n.mongodb.net/'
const mongoURL = process.env.MONGODB_URL;


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

module.export = db;

//comment for testing