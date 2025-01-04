const taskModel = require("../models/taskModel");

const taskController = {
    //redenrizando a página de index;
    index: (req, res) => {
        res.render('index');
    },

    listTask: (req, res) => {
        const tasks = taskModel.getAllTasks();

        res.render('listTask', {tasks});
    },

    save: (req, res) => {
        const {titleTask} = req.body;
        const newTask = taskModel.createListTask(titleTask);
        taskModel.saveListTask(newTask);
        res.redirect('/listTask');
    }
}

module.exports = taskController;

