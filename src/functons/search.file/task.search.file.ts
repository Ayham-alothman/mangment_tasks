import fs from 'fs';
import path from 'path';

const SearchTaskFile=async (idtask:string)=>{

    try{
        const pathProject=path.join(__dirname,`../../../public/uploads/tasks/`,idtask)
        const DataFile=fs.readFileSync(pathProject);
        return DataFile

    }
    catch(e:any){return false}
}

export {SearchTaskFile};