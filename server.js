require('dotenv').config();
const express=require('express');
const appServer=express();
const PORT=process.env.PORT||5500;
const taskRouter=require('./app/router/taskRouter');
const dbConnection=require('./app/config/db');

dbConnection();
appServer.use(express.urlencoded({extended:true}));
appServer.use(express.json());

appServer.use(taskRouter);
appServer.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})