const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.use('/api/todos', require('./routes/todos'));

app.use((req, res) => res.status(404).json({ error: 'invalid route' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'server error' });
});

app.listen(port, () => console.log(`Server on http://localhost:${port}`));
