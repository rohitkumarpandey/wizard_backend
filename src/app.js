const express = require('express');
const app = express();
const cors = require('cors');
const body_parser = require('body-parser');
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(body_parser.urlencoded({extended : true}));
app.use(body_parser.json());
app.use(cors());
require('./config/db');


const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes); 



app.listen(port, ()=>{console.log("Server started at: ",port)}); 
