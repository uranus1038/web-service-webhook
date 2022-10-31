const express = require('express');
const server = express() ;
const cors = require('cors'); 

// server use
server.use(express.json()); 
server.use(express.urlencoded({extended : false}));
server.use(cors()) ; 

// api 
const register = require('./api/register');

// route api 
server.use('/api/register',register)

server.listen('8000' , ()=> {
    console.log('server starting to port > 8000');
})