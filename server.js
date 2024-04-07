// require ('dotenv').config();
const express = require('express');
const app = express();

// console.log(process.env);
const port =  5050;


app.get('/', (req,res)=>{

    res.send("welcome home");
})
app.get('/about', (req,res)=>{
    res.send("this is about")
})
app.get('/services', (req,res)=>{
    res.send("welcome to services")
})

app.get('/getdetail', (req,res)=>{
    const details = [{
        "id":1,
        "details":"this",
        "xzy": "hell"
    }]
    res.send(details)
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})