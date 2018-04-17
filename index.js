const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors');

// Connect To Database 
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const app = express();

const Roofs = require('./routes/Roofs');

// Port Number
const port =process.env.PORT|| 8080;

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//cors middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/Roofs', Roofs);

//Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});





