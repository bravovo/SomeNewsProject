import dotenv from 'dotenv';
import path from 'path';
// require('dotenv').config();

dotenv.config({ path: path.resolve('D:/Університет/3_course/1/WebDev/project/SomeNewsProject/somenewsproject/.env') });
import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {});
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

// module.exports = connectDB;
export default connectDB;