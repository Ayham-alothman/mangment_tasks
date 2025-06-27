import fs from 'fs/promises'; // Importing the promise-based fs module
import path from 'path';


const StoreFileProject=async (fileName:string,data:Buffer)=>{
    try{console.log(fileName);
        const uploadPath = 
        path.join(__dirname, '../../.././public/uploads/projects', fileName.toString());

        const pathDirUpload=path.join(__dirname, '../../.././public/uploads/');
        const pathDirTask=path.join(__dirname, '../../.././public/uploads/projects');

        await fs.mkdir(pathDirUpload, { recursive: true });
        await fs.mkdir(pathDirTask, { recursive: true });``
        await fs.writeFile(uploadPath, data);

    }
    catch(err){throw err}
}

export {StoreFileProject}