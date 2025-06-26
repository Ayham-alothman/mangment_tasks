import mongoose,{connect} from "mongoose";

import { Task } from "../schema/task.schema";

const StoreTaskModel=async (nameT:string,typeT:string,overviewT:string,own:string)=>{
    try{
        await connect(process.env.MONGODB_URI as string);
        const {_id}=await Task
        .insertOne({nameTask:nameT,typeTask:typeT,overviewTask:overviewT,ownUser:own});
        return _id;
    }
    catch(e){throw e}
    finally{ await mongoose.connection.close();}
}

StoreTaskModel(`task1`,'uiux',`build interface`,`6852826f18af1f99d32e9328`);


export {StoreTaskModel}