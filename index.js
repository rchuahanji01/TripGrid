const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const port = process.env.port

app.get('/', (req,res)=>{
    res.send("hellow")
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})