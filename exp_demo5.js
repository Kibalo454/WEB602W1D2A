var express = require('express');
var app = express();

app.use((req,res,next)=>{ console.log(`${req.method} ${req.url}`); next(); });

app.get('/bookings/:bookingId', (req, res) => {
  res.json(req.params);   // -> {"bookingId":"25"}
});
app.listen(3000);

console.log('Server running on http://localhost:3000');