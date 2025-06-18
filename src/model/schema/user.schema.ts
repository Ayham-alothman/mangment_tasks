import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the User document
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    tasks: mongoose.Types.ObjectId[];
}

// Create the User schema
const userSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true ,unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [{ type: mongoose.Types.ObjectId,default:[], ref: 'Task' }],
}, { timestamps: true });

// Create the User model
const User = mongoose.model<IUser>('User', userSchema);

export {User};
