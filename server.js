var http = require('http');
var express = require('express');

app = express();

app.listen(8000, () => {
    console.log("Application started and listening on port 8000");
});

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/main.html");
});