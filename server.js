const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
const PORT = 3000;

const { handleJoke } = require(__dirname + '/handlers.js');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/make-me-laugh/index.html');
})

app.post('/jokes', handleJoke);

app.listen(PORT, (req,res)=>{
    console.log('Server is Up : 3000');
    
})