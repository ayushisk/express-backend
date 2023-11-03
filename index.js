const express = require('express');
const mongoose = require('mongoose')

const videorouter = require('./routes/videorouter');

const app = express();
app.use(express.json());

const DBURL = "mongodb://localhost:27017/webd"

mongoose.connect(DBURL)
.then(() => {console.log("Database connected", DBURL)})
.catch((error) => (console.log("Cannot connect DB", error)))

app.get('/', function(req, res){
    return res.send("Hello Server!")
})
//addition routers 

app.use(videorouter)

app.listen(5500, function(){
    console.log("App server running on 5500")
})