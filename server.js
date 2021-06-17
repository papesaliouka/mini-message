const express = require('express');

var app = express();
app.get('/', (req,res)=>{
    res.send('hello')
    console.log('hello')
})

app.get('/new', (req,res)=>{
    res.send('hitted')
    console.log('new hitted')
})

app.listen(8000, ()=> console.log('server is running'));