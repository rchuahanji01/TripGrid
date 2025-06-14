const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const port = process.env.port
const connectDb = require('./db/connectDb')

app.get('/', (req,res)=>{
    res.send("hellow")
})
const startServer = async ()=>{
    try{
    app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
    
    })
    await connectDb()
    }catch(err){
        console.log('something went wrong ',err)
    }


}

startServer()
