import {Request,Response} from 'express';
import { GetDetailsProjectModel } from '../../model/project/getdetails.project.model';
import { SearchProjectFile } from '../../functons/search.file/project.search.file';
import { SearchTaskFile } from '../../functons/search.file/task.search.file';

const GetDetailsProjectControllar = async (req: Request, res: Response) => {
    try {
        const idproject = req.params.idproject;
        const DataProject: any = await GetDetailsProjectModel(idproject);
        
        // Convert Mongoose document to plain object
        const plainDataProject = DataProject.toObject();

        const DataFile = await SearchProjectFile(idproject);
        

        if (DataFile) { 
            plainDataProject.fileProject = DataFile; // Add file to the plain object
        }

        for(let i=0;i<plainDataProject.tasks.length;i++ ){

          const fileTask=await SearchTaskFile(plainDataProject.tasks[i]._id.toString());
          
          if(fileTask){plainDataProject.tasks[i].fileTask=fileTask}
        }

        res.status(200).json(plainDataProject);
    } catch (e) {
        console.error(e); // Log the error for debugging
        res.status(403).json(`issue request`);
    }
}

export {GetDetailsProjectControllar}