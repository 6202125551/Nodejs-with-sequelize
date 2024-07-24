require('dotenv').config()
const express = require("express")
require('./models/index')

const app = express()
const port = process.env.PORT || 3000



app.use(express.json())

app.get('/', (req, res) =>{
    res.send("hello ratnaraj")
})

app.listen(port , ()=> {
    console.log("server is running at port " + `${port}`)
})