const express = require('express');
const server = express() ;
//db config
const UMI = require('../config/UMIConnect') ; 
//server use
server.use(express.json()); 
server.use(express.urlencoded({extended : false}));

//verify email 
const email = server.post("/email-verify", (req, res)=>{
    console.log( req.body.email );
    UMI.execute("SELECT email FROM accouts WHERE email = ?" , [req.body.email] ,)
    .then(([rows])=>
    {
        if(rows.length > 0)
        {
            console.log("yes");
            return res.send({status : 'no'});
        }else
        {
            console.log("No");
            return res.send({status : 'ok'});
        }
    });
});
//verify userName
const userName = server.post("/userName-verify", (req, res)=>{
    console.log( req.body.userName );
    UMI.execute("SELECT userName FROM accouts WHERE userName = ?" , [req.body.userName] ,)
    .then(([rows])=>
    {
        if(rows.length > 0)
        {
            console.log("yes");
            return res.send({status : 'no'});
        }else
        {
            console.log("No");
            return res.send({status : 'ok'});
        }
    });
});
//verify nametag
const name = server.post("/name-verify", (req, res)=>{
    console.log( req.body.name );
    UMI.execute("SELECT nametag FROM accouts WHERE nametag = ?" , [req.body.name] ,)
    .then(([rows])=>
    {
        if(rows.length > 0)
        {
            console.log("yes");
            return res.send({status : 'no'});
        }else
        {
            console.log("No");
            return res.send({status : 'ok'});
        }
    });
});
//register
const register = server.post("/success", (req, res)=>{
    const {email ,brithday ,userName,passWord ,gender,nametag , } = req.body ;
    let date = new Date();
    UMI.execute("INSERT INTO accouts (email,brithday,userName,passWord,gender,nametag ,date) VALUES(?,?,?,?,?,?,?) ",
     [email ,brithday ,userName , passWord , gender , nametag , date ])
    .then((result)=>
    {
        return res.send({status : 'ok'});
    });
});

module.exports = email ;
module.exports = userName;
module.exports = name;
module.exports = register;