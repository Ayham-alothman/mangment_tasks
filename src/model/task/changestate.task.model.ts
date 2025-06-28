import mongoose,{connect} from "mongoose";
import { Task } from "../schema/task.schema";

const ChangeStateOfTaskModel=async (idTask:string,stateTask:number)=>{
    try{
       await connect(`mongodb://localhost:27017/Tasker`);
       const Doc=await Task.findByIdAndUpdate(idTask,{
        state:stateTask
       },{new:true});
       return Doc;
       
    }
    catch(e){throw e}
    finally{ await mongoose.connection.close();}
}


export {ChangeStateOfTaskModel}