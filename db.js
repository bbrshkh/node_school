const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/school';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

module.export = db;

//comment for testing