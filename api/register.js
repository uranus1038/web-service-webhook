const express = require('express');
const server = express() ;
//db config
const UMI = require('../config/UMIConnect') ; 
//server use
server.use(express.json()); 
server.use(express.urlencoded({extended : false}));

const email = server.post("/email-validate", (req, res)=>{
    console.log( req.body.email );
    UMI.execute("SELECT * FROM accouts WHERE email = ?" , [req.body.email] ,)
    .then(([rows])=>
    {
        if(rows.length > 0)
        {
            console.log("yes");
            return res.send({status : 'ok'});
        }else
        {
            console.log("No");
            return res.send({status : 'no'});
        }
    });
});

module.exports = email