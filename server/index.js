
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes would go here
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/events', require('./routes/events'));
// app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/teencon';

// Connect to MongoDB
// mongoose.connect(MONGO_URI)
//  .then(() => console.log('Teencon DB Connected'))
//  .catch(err => console.error(err));

app.get('/', (req, res) => res.send('Teencon API is running...'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
