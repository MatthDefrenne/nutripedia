const express = require('express');
var bodyParser = require('body-parser')
const app = express();
var mailjet = require('node-mailjet').connect('36a3d81be137f529167c7d0231fce037', '192a40d8e4f50aef301882e97a531413');
const path = require('path');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '46.105.28.249',
  user     : 'root',
  password : 'hx7JPheSsbV9a6Lf',
  database : 'nutripedia'
});

connection.connect();

connection.query('SELECT * FROM articles', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json())

app.listen(process.env.PORT || 8080);
