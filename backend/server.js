const express = require("express")
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))

const PORT = 4000

app.get("/", (req,res) => {
    res.send("app is working")
})

app.listen(PORT, () => {
    console.log("server is runing")
})
