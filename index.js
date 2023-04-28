require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Car = require ('./models/cars');

const app = express();
const PORT = process.env.PORT || 3000;

const routes = require('./routes');


mongoose.set('strictQuery', false);


const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connected: ${conn.connection.host} `);
    }catch(error){
        console.log(error);
      
        process.exit(1);
    }
}

 
    app.get('/', (req, res) => {
        res.send("Hello from DB");
    })


    app.use(routes)


    app.get('/cars', async(req, res) => {
        const car = await Car.find();

        if(car){
            res.json(car);
        } else {
            res.send("Somthing went wrong.")
        }
    })

    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })

