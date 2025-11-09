var express = require('express');
var app = express();

// First middleware before response is sent
app.use(function(req, res, next) {
  console.log('Start');
  next();
});

// Route handler
app.get('/', function(req, res, next) {
  res.send('Middle');
  next();
});

// Last middleware
app.use('/', function(req, res) {
  console.log('End');
});

app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
