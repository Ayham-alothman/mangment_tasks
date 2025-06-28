import { Request,Response,NextFunction } from "express";
import { StoreNewCommentModel } from "../../model/comment/addnew.comment.model";

const AddCommentContollar=async (req:Request,res:Response)=>{
    try{
        const {idtask,owncomment,contentcomment}=req.body;
        await StoreNewCommentModel(idtask,owncomment,contentcomment);
        res.status(200).end();
    }
    catch(err){
        res.status(403).json(err);
    }
}

export {AddCommentContollar}