let ListTasks = [];

const taskModel = {
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
        return task;
    },
    //Salvando Tarefa
    saveListTask(task){
        ListTasks.unshift(task);
    },
    //atualizando tarefa
    updateListTask(id){
        const index = ListTasks.findIndex(task => ListTasks.id === id);
    },
    //Deletando Tarefa
    deleteListTask(id){
        ListTasks = ListTasks.filter(task => task.id !== id);
    }
}