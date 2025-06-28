import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Comment document
interface IComment extends Document {
  ownComment: mongoose.Types.ObjectId; // Reference to the User model
  taskId: mongoose.Types.ObjectId; // Reference to the Task model
  content: string; // Comment text
  date: Date; // Date of the comment
}

// Create the comment schema
const commentSchema: Schema<IComment> = new Schema({
    ownComment: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Reference to the User model
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Task', // Reference to the Task model
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Default to current date
  },
});

// Create the Comment model
const Comment = mongoose.model<IComment>('Comment', commentSchema);

export  {Comment};
