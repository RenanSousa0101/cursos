const taskController = {
    //redenrizando a página de index;
    index: (req, res) => {
        res.render('index');
    },

    listTask: (req, res) => {
        res.render('listTask');
    }
}

module.exports = taskController;

