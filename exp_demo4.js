var express = require('express');
var app = express();

app.get('/home', function (req, res) {
  res.send('Home Page');
});

app.get('/about', function (req, res) {
  res.send('About Us Page');
});


app.listen(3000);

console.log('Server running on http://localhost:3000')
