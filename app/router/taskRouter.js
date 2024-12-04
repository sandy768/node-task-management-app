const express=require('express');
const taskRouter=express.Router();
const TaskController=require('../module/webservice/taskController');

taskRouter.post('/createtaskdata',TaskController.createTask);
taskRouter.get('/getalltasks',TaskController.getAllTasks);
taskRouter.get('/gettaskbyid/:id',TaskController.getTaskById);
taskRouter.put('/updatetaskdata/:id',TaskController.updateTask);
taskRouter.delete('/deletetaskdata/:id',TaskController.removeTask);

module.exports=taskRouter;