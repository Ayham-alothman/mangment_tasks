import mongoose,{connect} from "mongoose";
import { Project } from "../schema/project.schema";

const GetAllProjectByIdModel=async(idUser:string)=>{

    try{
        await connect(process.env.MONGODB_URI as string);
       if (!mongoose.Types.ObjectId.isValid(idUser)) {
        throw {state:400,message:`Invalid user ID format`};
       }
       const IdUser = new mongoose.Types.ObjectId(idUser);
       const AllProject=await Project.find({ownProject:IdUser});
       return AllProject;
        
    }
    catch(err){throw err}
    finally{await mongoose.connection.close()}

}

export {GetAllProjectByIdModel}