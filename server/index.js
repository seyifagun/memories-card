import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import postRoutes from './routes/post.js';

//initialize app
// const app = require("express");
const app = express();

//line of code gets base_url/posts as home page and route fn declared in post.js
app.use('/posts', postRoutes);

//use different methods of app for various purposes
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

//remember to put url in an environment variable
const CONNECTION_URL = "mongodb+srv://seyifagun:Padrepio007.@cluster0.3uzfdh5.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

//connect to database with mongoose method(connect)
mongoose.connect(CONNECTION_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//ensure we don't get warnings in the console
// mongoose.set('useFindAndModify', false);