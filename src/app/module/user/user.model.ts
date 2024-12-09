import { TracingChannelSubscribers } from 'diagnostics_channel';
import mongoose, { Schema, Document } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  photo: string;
  password: string;
};

// Define the Mongoose schema for the User model
const userSchema: Schema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (value: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(value);
      },
      message: 'Please provide a valid email address',
    },
  },
  photo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 15,  // Add minimum length validation for security
  },
});

// Create and export the model
export const User = mongoose.model<TUser>('User', userSchema);

