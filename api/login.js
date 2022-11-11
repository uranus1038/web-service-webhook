const express = require('express');
const bcrypt = require('bcrypt')
const server = express();
//db config
const UMI = require('../config/UMIConnect');
//server use
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//login user
const login = server.post("/login", (req, res) => {
    console.log(req.body.passWord);
    UMI.execute("SELECT * FROM accouts WHERE userName = ?   ",
        [req.body.userName],)
        .then(([rows]) => {
            if (rows.length === 1) {
                if ( bcrypt.compareSync(req.body.passWord, rows[0].passWord) ) {
                    console.log("Yes");
                    return res.send({ status: 'ok' })
                } else {
                    console.log("passWord wrong");
                    return res.send({ status: 'err' })
                }
            } else {
                console.log("Not Data");
                return res.send({ status: 'no' });
            }
        });
});

module.exports = login; 
