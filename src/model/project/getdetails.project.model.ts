import mongoose,{connect} from "mongoose";
import { Project } from "../schema/project.schema";

const GetDetailsProjectModel=async(idproject:string)=>{

    try{
        await connect(process.env.MONGODB_URI as string);
        
        const DataProject=await Project.findById(idproject).populate({
            path: 'tasks',
            populate: {
              path: 'ownUser', // Field to populate within the tasks
              model: 'User',
              select: '_id name'
               // Model to use for populating
            }
          }).exec();
        return DataProject;

    }
    catch(err){throw err}
    finally{await mongoose.connection.close()}

}

export {GetDetailsProjectModel} 