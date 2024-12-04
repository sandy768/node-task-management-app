const TaskRepository=require('../task/repository/taskRepository');
const TaskModel=require('../task/model/taskModel');

class TaskController{
    async createTask(req,res){
        try{
            if(!req.body.title){
                return res.status(401).json({
                    success:false,
                    message:"Task Title is required",
                    status:"TODO"
                })
            }
            else if(!req.body.status){
                return res.status(401).json({
                    success:false,
                    message:"Task Status is required"
                })
            }
            else if(!req.body.priority){
                return res.status(401).json({
                    success:false,
                    message:"Task priority is required"
                })
            }
            else{
                let exist_task=await TaskRepository.find({title:req.body.title});
                if(!exist_task){
                    let task_details={
                        title:req.body.title.toLowerCase(),
                        status:req.body.status.toLowerCase(),
                        priority:req.body.priority.toLowerCase(),
                    };
                    let save_task=await TaskRepository.save(task_details);
                    if(save_task){
                        return res.status(200).json({
                            success:true,
                            message:"Task is created successfully",
                            status:200
                        })
                    }
                }
                else{
                    return res.status(201).json({
                        success:false,
                        message:"Task already exists"
                    })
                }
            }
        }
        catch(err){
            console.log("Error to collect task details",err);
            return res.status(401).json({
                success:false,
                message:"Error to collect task details"+err
            })
        }
    }
    
    async getAllTasks(req,res){
        try{
            let allTasks=await TaskModel.find();
            if(allTasks){
                return res.status(201).json({
                    success:true,
                    message:"All tasks are successfully fetched",
                    status:201,
                    view_tasks:allTasks
                })
            }
        }
        catch(err){
            console.log("Error to fetch tasks",err);
            return res.status(401).json({
                success:false,
                message:"Error while fetching all tasks"+err
            })
        }
    }
    async getTaskById(req,res){
        try{
            let task_id=req.params.id;
            let fetchTaskById=await TaskRepository.findTask({_id:task_id});
            if(fetchTaskById){
                return res.status(201).json({
                    success:true,
                    message:"Task fetched successfully by its id",
                    status:201,
                    result:fetchTaskById
                })
            }
        }
        catch(err){
            console.log("Error while fetching tasks by its id");
            return res.status(401).json({
                success:false,
                message:"Error while fetching tasks by its id"+err
            })
        }
    }
    async updateTask(req,res){
        try{
            if(!req.body.title){
                return res.status(401).json({
                    success:false,
                    message:"Task Title is required",
                    status:"TODO"
                })
            }
            else if(!req.body.status){
                return res.status(401).json({
                    success:false,
                    message:"Task Status is required"
                })
            }
            else if(!req.body.priority){
                return res.status(401).json({
                    success:false,
                    message:"Task priority is required"
                })
            }
            else{
                let task_id=req.params.id;
                let exist_task=await TaskRepository.findTask({_id:task_id});
            
                exist_task.title=req.body.title.toLowerCase()||exist_task.title;
                exist_task.status=req.body.status.toLowerCase()||exist_task.status;
                exist_task.priority=req.body.priority.toLowerCase()||exist_task.priority;

                let update_task=await TaskRepository.save(exist_task);

                if(update_task){
                    return res.status(200).json({
                        success:true,
                        message:"Task is updated successfully",
                        status:200,
                        result:update_task
                    })
                }
            }
            
        }
        catch(err){
            console.log("Error to update the particular task");
            return res.status(401).json({
                success:false,
                message:"Error to update the particular task"
            })
        }
    }
    async removeTask(req,res){
        try{
            let task_id=req.params.id;
            let deleteTaskData=await TaskRepository.deleteTask(task_id);
            if(deleteTaskData){
                return res.status(204).json({
                    success:true,
                    message:"Task is deleted successfully",
                    status:204,
                    deleted_task:deleteTaskData
                })
            }
        }
        catch(err){
            console.log("Error to delete the specific task",err);
            return res.status(401).json({
                success:false,
                message:"Error to delete the specific task"+err
            })
        }
    }
}

module.exports=new TaskController();