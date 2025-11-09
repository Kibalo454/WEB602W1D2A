const express = require('express');
const c = require('../controllers/todos');
const router = express.Router();

router.get('/', c.list);
router.get('/:id', c.read);
router.post('/', c.create);
router.put('/:id', c.update);
router.patch('/:id', c.patch);
router.delete('/:id', c.remove);

module.exports = router;
