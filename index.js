const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("./config/database");

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 7000;

// use cors
app.use(cors());


//import routes
const pizzaCategoryRoute = require('./routes/foodRoutes');
const pizzaSubCategoryRoute = require('./routes/foodRoutes');
const burgerCategoryRoute = require('./routes/foodRoutes');
const burgerSubCategoryRoute = require('./routes/foodRoutes');


app.use('/', pizzaCategoryRoute);
app.use('/', pizzaSubCategoryRoute);
app.use('/', burgerCategoryRoute);
app.use('/', burgerSubCategoryRoute);



//connect to server
app.listen(PORT, ()=> console.log("Server connected") );