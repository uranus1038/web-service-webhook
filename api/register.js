const express = require('express');
const server = express() ;

server.use(express.json()); 
server.use(express.urlencoded({extended : false}));

const register = server.post("/register", (req, res)=>{
    
});

module.exports = register