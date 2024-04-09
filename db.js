const mongoose = require('mongoose');

require('dotenv').config()

// const mongoURL = process.env.MONGODB_LOCAL_URL;
// const mongoURL = process.env.MONGODB_URL;
MONGODB_URL = 'mongodb+srv://school:school123@cluster0.mr6vz9n.mongodb.net/'


mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;

module.export = db;

//comment for testing