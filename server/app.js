var express = require('express');
var bodyParser = require('body-parser');
var database = require('../DB/data.js');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));


{
  "rules": [
    {"pathname": "/docs**", "method":["GET", "POST", "OPTIONS"], "dest": "https://docs.my-app.com"},
    {"pathname": "/**", "dest": "https://ui.my-app.com"}
  ]
}

const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(withSass({
  webpack(config, options) {
    // Further custom configuration here
    return config
  }
}))
