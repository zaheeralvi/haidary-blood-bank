const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/controller/api');

const port=3000;

const app=express();
app.use(express.static(path.join(__dirname,"dist/haidary-blood-bank")));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',api);

app.get("*",(req,res) => {
    // res.send('api works');
    res.sendFile(path.join(__dirname,'dist/haidary-blood-bank/index.html'));

});

app.listen(port,function () {
console.log('server is listening at localhost: '+port);
});