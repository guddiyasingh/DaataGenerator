const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models.Employee');
const path = require('path');

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/todo")
.then(()=>console.log('MongoDB connected'));

// --------Dummy-data generator---------

const firstNames = [

    'Shivam','Aarav','Isha',"priya",'Rahul','Sneha', "Vikram",'Kiran','Dev', "Neha" ];

    function buildDummyEmployee(i) {

   return {

    name: firstNames[i % firstNames.length],
    salary: 200000000 + i*250000, //vary salary a bit
    language: 'English',
    country: 'India',
    isManager: i%3 === 0    //every 3rd person is manager
   };

    } 

//  // ---------- API route --------

 app.get('/generate', async (_req, res)=>{
    try{
    // wipe old data
    await Employee.deleteMany({});
    // create 10 new docs
    const docs = await Employee.insertMany(
        Array.from({length: 10}, (_i) => buildDummyEmployee(i))
       
    )
     res.json({ok: true, count:docs.length});
    }catch (err) {
        console.error(err);
        res.status(500).json({ok: false, message: 'Server error'});
    }
 });

 //------- Serve the tiny frontend --------

 app.use(express.static(path.json(__dirname, 'public')));

 app.listen()