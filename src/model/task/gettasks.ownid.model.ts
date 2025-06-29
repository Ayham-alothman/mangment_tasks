import mongoose,{connect} from "mongoose";
import { Task } from "../schema/task.schema";

const GetAllTaskByIdModel=async (idUser:string,)=>{
    try{
       await connect(`mongodb://localhost:27017/Tasker`);
       if (!mongoose.Types.ObjectId.isValid(idUser)) {
        throw {state:403,message:`Invalid user ID format`};
       }
       const IdUser = new mongoose.Types.ObjectId(idUser);
       const tasks = await Task.find({ ownUser: IdUser });
       const plainTasks = tasks.map(task => task.toObject());
       return plainTasks;

      
       
    }
    catch(e){throw e}
    finally{ await mongoose.connection.close();}
}


export {GetAllTaskByIdModel}

