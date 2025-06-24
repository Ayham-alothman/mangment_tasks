import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the User document
export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    tasks: mongoose.Types.ObjectId[];
    favorite_user: { id: mongoose.Types.ObjectId; name: string }[]; // Updated property
}

// Create the User schema
const userSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [{ type: mongoose.Types.ObjectId, default: [], ref: 'Task' }],
    favorite_user: [{ // Updated property
        id: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }, // Assuming the reference is to User
        name: { type: String, required: true }
    }]
}, { timestamps: true });

// Create the User model
const User = mongoose.model<IUser>('User', userSchema);

export { User };
    