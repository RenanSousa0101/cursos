let listTasks = [];

const taskModel = {
    getAllTasks() {
        return listTasks;
    },
    //Criando tarafa;
    createListTask(title){
        const ListTask = {
            id: Date.now().toString(),
            title: title,
            tasks: [],
            
            addTask(name){
                this.tasks.push({id: Date.now().toString(), name: name, check: false});
            }
        }
        return ListTask;
    },
    //Salvando Tarefa
    saveListTask(task){
        listTasks.unshift(task);
    },
    //atualizando tarefa
    updateListTask(id){
        const index = listTasks.findIndex(task => listTasks.id === id);
    },
    //Deletando Tarefa
    deleteListTask(id){
        listTasks = listTasks.filter(task => task.id !== id);
    }
}

module.exports = taskModel;