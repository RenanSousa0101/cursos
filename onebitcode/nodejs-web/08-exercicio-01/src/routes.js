const express = require('express');
const taskController = require('./controllers/taskController');

const router = express.Router();

router.get('/', taskController.index);
router.get('/listTask', taskController.listTask);
router.post('/listTask/save', taskController.save);
router.post('/listTask/delete/:id', taskController.delete)
module.exports = router;