import mongoose,{connect} from "mongoose";
import { Task } from "../schema/task.schema";
import { Comment } from "../schema/comment.schema";

const StoreNewCommentModel=async(idTask:string,ownComment:string,dataComment:string)=>{

    try{
        await connect(process.env.MONGODB_URI as string);
        const DocTask=await Task.findById(idTask);
        if(DocTask!=null&&DocTask){
            const {leaderProject,ownUser}=DocTask;
            if(ownComment==leaderProject||ownComment==ownUser){
                await Comment.insertOne({ownComment:ownComment,taskId:idTask,content:dataComment});
                return
            }
            throw {state:403,message:`not have permision to write this comment`};
            
        }
        throw {state:403,message:`not found ths id task`}
        

    }
    catch(err){throw err}
    finally{await mongoose.connection.close()}

}

export {StoreNewCommentModel}

