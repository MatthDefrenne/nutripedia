const express = require('express');
var bodyParser = require('body-parser')
const app = express();
var mailjet = require('node-mailjet').connect('36a3d81be137f529167c7d0231fce037', '192a40d8e4f50aef301882e97a531413');
const path = require('path');


app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
});


    
app.use(bodyParser());

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '46.105.28.249',
  user     : 'root',
  password : 'hx7JPheSsbV9a6Lf',
  database : 'nutripedia'
});

connection.connect();



app.get('/articles', function(req, res) {
    connection.query('SELECT * FROM articles', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.json(results);
      });
})

app.use(bodyParser.json())

app.listen(8080);
console.log('Server running at http://localhost:8080/');

