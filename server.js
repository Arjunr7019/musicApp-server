const express = require('express');
const app = express();

const songsList = [
    {
    "name":"song1",
    "image":"image url",
    "artistName":"allan walker",
},
{
    "name":"song2",
    "image":"image url",
    "artistName":"allan walker",
}
]

app.get("/api", (req, res)=>{
    res.json(songsList)
})

app.listen(5000, ()=> console.log("server started at port 5000"));