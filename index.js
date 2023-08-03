require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { authentication } = require('./middlewares/authMiddleware');

const routes = require('./routes');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;


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
        res.send("<h1>Server is OK. MongoDb is Connected.</h1>");
    })

    
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(authentication);

    app.use(routes);


    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })

