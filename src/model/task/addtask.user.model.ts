import mongoose,{connect} from "mongoose";
import { User } from "../schema/user.schema";


const AddTaskToUser=async (idTask:string,ownidTask:string)=>{
    try{
        await connect(process.env.MONGODB_URI as string);
        await User.findByIdAndUpdate(ownidTask,
            {$push:{tasks:idTask}}
            );
            return
    }
    catch(e){throw e}
    finally{ await mongoose.connection.close();}
}

export {AddTaskToUser}