const http = require('http');
const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();
const port = 3001;


app.use(express.static('public'));

app.listen(3001, function(){
    console.log(`app running on port ${port}`);
});

// app.get('/', (req, res) => res.send('Hello World from Express.js!'));

// app.listen(port, () => console.log(`App listening on port ${port}`));

// http.createServer(function(req,res){

//     res.statusCode = 200;

//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');

// }).listen(3000);

// console.log(`File server running at port 3000`);