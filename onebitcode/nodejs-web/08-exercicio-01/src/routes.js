const express = require('express');
const taskController = require('./controllers/taskController');

const router = express.Router();

router.get('/', taskController.index);
router.get('/listTask', taskController.listTask);

module.exports = router;