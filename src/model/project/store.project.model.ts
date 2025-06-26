import mongoose,{connect} from "mongoose";
import { Project } from "../schema/project.schema";

const StoreProjectModel=async(name:string,type:string,own:string,description:string,tasks:any[])=>{

    try{
        await connect(process.env.MONGODB_URI as string);
        const {_id}=
        await Project.insertOne
        ({nameProject:name,typeProject:type,ownProject:own,description:description,tasks:tasks});
        return _id;

    }
    catch(err){throw err}
    finally{await mongoose.connection.close()}

}

export {StoreProjectModel}