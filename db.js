const mongoose = require('mongoose');

// const mongoURL = 'mongodb://localhost:27017/school';
const mongoURL = 'mongodb+srv://school:school123@cluster0.mr6vz9n.mongodb.net/'


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

module.export = db;

//comment for testing