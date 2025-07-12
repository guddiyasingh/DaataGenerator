const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
 
name: {type: String,  required: true},
salary: {type: Number, required: true},
language: {type: String, required: true},
country: {type: String, required: true},
isManager: {type: Boolean, default: false}
});

module.exports = mongoose.model('Employee', EmployeeSchema);