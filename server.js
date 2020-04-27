const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();

app.get('/', (req, res) => res.send('Success, your API is running...'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Edynak's port ${PORT}`));
