require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('MongoDB connected'))
  
app.use(express.json());

const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter);

const employersRouter = require('./routes/employers');
app.use('/employers', employersRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});