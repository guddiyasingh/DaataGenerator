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
        
    } 