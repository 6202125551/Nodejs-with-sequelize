require('dotenv').config()
const express = require("express")
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000



app.use(express.json())

User.sync()
// User.drop()

app.get('/', (req, res) =>{
    res.send("hello ratnaraj")
})

app.listen(port , ()=> {
    console.log("server is running at port " + `${port}`)
})