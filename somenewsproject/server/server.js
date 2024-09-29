import express from 'express';
import connectDB from "../config/db.config.js";

const PORT = process.env.PORT;

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('API is ok');
    console.log("API is running");
});

app.listen(PORT, (err) => {
    if(err){
        return console.log(err);
    }
    console.log(`Server running on port ${PORT}`)
});