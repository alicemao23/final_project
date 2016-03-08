var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

//app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './../app/'));
//var db = mongoose.connection;
//mongoose.connect('mongodb://localhost/db');

// app.get('/', function(req, res){
// 	res.sendfile('app/index.html');
// });

var productRoutes = require('./routes/productRoutes');
var orderRoutes = require('./routes/orderRoutes');

app.use('/api/products',productRoutes);
app.use('/api/orders',orderRoutes);

app.listen(8080,function(){
	console.log('Listening on http://localhost:8080');
	console.log('Stop Server With CTRL + C');
});

