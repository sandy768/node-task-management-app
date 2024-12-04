const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:100
    },
    status:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
    versionKey:false,
});

const TaskModel=new mongoose.model('javascript',TaskSchema);
module.exports=TaskModel;