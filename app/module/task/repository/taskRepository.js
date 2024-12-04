const TaskModel=require('../model/taskModel');

class TaskRepository{
    async save(data){
        try{
            let createTask=await TaskModel.create(data);
            return createTask;
        }
        catch(err){
            console.log("Error to create task",err);
        }
    }
    async find(query){
        try{
            let findTask=await TaskModel.findOne(query);
            return findTask;
        }
        catch(err){
            console.log("Error to find task data",err);
        }
    }
    async findTask(query){
        try{
            let searchTask=await TaskModel.findById(query);
            return searchTask;
        }
        catch(err){
            console.log("Error to find particular task by id",err);
        }
    }
    async deleteTask(task_id){
        try{
            let deleted_task=await TaskModel.findByIdAndDelete(task_id);
            return deleted_task;
        }
        catch(err){
            console.log("Error to delete the specific task",err);
        }
    }
}

module.exports=new TaskRepository();