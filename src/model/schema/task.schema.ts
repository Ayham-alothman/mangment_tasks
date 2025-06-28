import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Task document
interface Task extends Document {
    nameTask: string;
    ownUser: string;
    leaderProject:string;
    overviewTask: string;
    typeTask: string;
    state?: number; // Optional with default value
}

// Create the Task schema
const TaskSchema: Schema = new Schema({
    nameTask: {
        type: String,
        required: true,
    },
    typeTask: {
        type: String,
        required: true,
    },
    overviewTask: {
        type: String,
        required: true,
    },
    ownUser: {
        type: mongoose.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    state: {
        type: Number,
        default: 1, // Default value for state
        required: false, // Not required
    },
    leaderProject: {
        type: mongoose.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    
});

// Create the Task model
const Task = mongoose.model<Task>('Task', TaskSchema);

export {Task};
