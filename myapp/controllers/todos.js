let todos = [
  { id: 1, title: 'Learn Express', done: false },
  { id: 2, title: 'Build API',     done: false }
];

exports.list = (req, res) => res.json(todos);

exports.read = (req, res) => {
  const id = Number(req.params.id);
  const item = todos.find(t => t.id === id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};

exports.create = (req, res) => {
  const { title, done = false } = req.body || {};
  if (!title) return res.status(400).json({ error: 'title required' });
  const id = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  const item = { id, title, done: Boolean(done) };
  todos.push(item);
  res.status(201).json(item);
};

exports.update = (req, res) => {
  const id = Number(req.params.id);
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const { title, done } = req.body || {};
  if (title === undefined || done === undefined)
    return res.status(400).json({ error: 'title and done required' });
  todos[idx] = { id, title, done: Boolean(done) };
  res.json(todos[idx]);
};

exports.patch = (req, res) => {
  const id = Number(req.params.id);
  const item = todos.find(t => t.id === id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  const { title, done } = req.body || {};
  if (title !== undefined) item.title = title;
  if (done !== undefined)  item.done  = Boolean(done);
  res.json(item);
};

exports.remove = (req, res) => {
  const id = Number(req.params.id);
  const before = todos.length;
  todos = todos.filter(t => t.id !== id);
  if (todos.length === before) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
};
