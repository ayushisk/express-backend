const express = require('express');
const videorouter = express.Router();

videorouter.get('/videos', function(req, res){
    return res.send({id: "1", link : "some video link"})
})

videorouter.post('/videos', function(req, res){
    console.log(req.body);
    return res.send({body: req.body, response:"success"});
})

videorouter.post('/coffee', function(req, res){
    return res.send({id: "n", link:"Have some coffee"})
})

module.exports = videorouter;