const path = require("path");
const express = require("express");
const dotenv = require('dotenv').config({
    path: './config/config.env'
});
const colors = require("colors");
const morgan = require("morgan");

const connectDB = require("./config/db");
connectDB();

const transactions = require('./routes/transactions');

const app = express();
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
})