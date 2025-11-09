var express = require('express');
var app = express();

app.get('/hello', (req,res) => {
  res.send('Hello from /hello');
});

app.listen(3000);

console.log('Server running on http://localhost:3000');
