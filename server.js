const express = require('express');
const app = express();



const port = 5050;

api.get('/detils', (req,res)=>{
    res.send("conncected ")
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})