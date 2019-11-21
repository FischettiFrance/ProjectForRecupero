const path = require('path');
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/web/index.html'));
});

app.get('/muro',function(req,res){
    res.sendFile(path.join(__dirname+'/web/muro.html'));
});

app.get('/api/muro',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(path.join(__dirname+'/muro.json'));
});

app.listen(3000, function () {
    console.log('server node sulla porta 3000');
});