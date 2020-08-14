const mongoose = require("mongoose");
const dotenv = require("dotenv").config({path: './config.env'})

//Connect to Mongoose DB

const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI;

    try{
        const conn = await mongoose.connect(MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)


    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        //Exit with Failure
        process.exit(1);
    }
}


module.exports = connectDB;




