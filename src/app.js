const express = require('express');
const app = express();
const cors = require('cors');
const body_parser = require('body-parser');
const port = process.env.PORT || 4000;
app.use(express.json({limit: '50mb'}));
// app.use(body_parser.urlencoded({extended : true}));


app.use(body_parser.json({limit: '50mb'}));
app.use(body_parser.urlencoded({limit: '50mb', extended: true,  parameterLimit:50000}));

app.use(body_parser.json());
app.use(cors());
require('./config/db');


const userRoutes = require('./routes/userRoutes');
app.get('/pingServer', (request, response)=>{
    return response.status(200).json({message : 'Connected to server'})
})
app.use('/user', userRoutes); 



app.listen(port, ()=>{console.log("Server started at: ",port)}); 
