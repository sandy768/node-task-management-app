const mongoose=require('mongoose');

const dbConnection=async()=>{
    try{
        console.log("Database is connected successfully");
        return mongoose.connect(process.env.DB_URL);
    }
    catch(err){
        console.log("Database not connected yet",err);
    }
}

module.exports=dbConnection;