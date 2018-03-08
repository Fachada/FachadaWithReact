var express = require('express');
var bodyParser = require('body-parser');
var database = require('../DB/data.js');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));
