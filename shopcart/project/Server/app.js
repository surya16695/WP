var express = require('express');

var dbController = require('./dbController');

var app = express();

var cors = require('cors');

app.use(cors());

dbController(app);

const port = process.env.PORT || 3000;

app.listen(port, "127.0.0.1");

console.log(`Listening at port ${port}`);