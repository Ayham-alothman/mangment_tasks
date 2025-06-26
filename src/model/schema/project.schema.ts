import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Project document
interface IProject extends Document {
    nameProject: string;
    typeProject: string;
    ownProject: string;
    description: Buffer; // To store file data
    tasks: mongoose.Types.ObjectId[]; // Array of task IDs
}

// Create the Project schema
const ProjectSchema: Schema = new Schema({
    nameProject: {
        type: String,
        required: true,
    },
    typeProject: {
        type: String,
        required: true,
    },
    ownProject: {
        type: mongoose.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    description: {
        type: String, // Use Buffer to store file data
        required: true,
    },
    tasks: [{
        type: mongoose.Types.ObjectId,
        ref: 'Task', // Reference to the Task model
        required: false, // Not required
    }],
});

// Create the Project model
const Project = mongoose.model<IProject>('Project', ProjectSchema);

export {Project};
