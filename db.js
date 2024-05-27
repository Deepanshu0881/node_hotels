const mongoose = require('mongoose');
require('dotenv').config();

// define the mongoDB connection URL
// const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
const mongoURL = process.env.MONGODB_URL;
//set up mongoDB connection
mongoose.connect(mongoURL); 

//Get the default connection
// Mongoose maintains a default connection object representing the mongoDB conncetion
const db = mongoose.connection;

//define event listeners for database connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.error('MongoDB connection error:',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

  

// Exports the databse connection 
module.exports = db;
