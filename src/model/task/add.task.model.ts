import mongoose,{connect} from "mongoose";

import { Task } from "../schema/task.schema";

const StoreTaskModel=async (nameT:string,typeT:string,overviewT:string,own:string,leaderProject:string)=>{
    try{
        await connect(process.env.MONGODB_URI as string);
        const {_id}=await Task
        .insertOne({nameTask:nameT,typeTask:typeT,overviewTask:overviewT,ownUser:own,leaderProject:leaderProject});
        return _id;
    }
    catch(e){throw e}
    finally{ await mongoose.connection.close();}
}



export {StoreTaskModel}