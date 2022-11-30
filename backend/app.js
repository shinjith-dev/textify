const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("<h1>Hello there</h1>")
})

module.exports = app