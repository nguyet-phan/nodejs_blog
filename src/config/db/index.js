const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/Blog_education_dev');
        // await mongoose.connect('mongodb://127.0.0.1:27017/Blog_education_dev', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     // useCreateIndex: true,
        // });
        console.log('===================Connected successfully=======================!');
    } catch (error) {
        console.log('===================Connected failure============================!');
    }
}

module.exports = { connect };