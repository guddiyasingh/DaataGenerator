const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models.Employee');
const path = require('path');

const app = express();
const PORT = 3000;
