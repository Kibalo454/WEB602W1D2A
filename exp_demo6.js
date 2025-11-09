var express = require('express');
var app = express();

app.get('/home', (req, res) => res.send('Home Page'));
app.get('/about', (req, res) => res.send('About'));

// catch-all (must be last)
app.use((req, res) => {
  res.status(404).send('404 error. This is an invalid URL.');
});

app.listen(3000);

console.log('Server running on http://localhost:3000')
