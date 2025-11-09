var express = require('express');
var app = express();

// Simple request time logger
app.use((req, res, next) => {
  console.log('A new request received at ' + new Date().toISOString());
  next();
});

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.listen(3000);

console.log('Server running on http://localhost:3000');
