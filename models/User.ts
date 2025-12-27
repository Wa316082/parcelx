import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
    {
        name: String,
        email: { type: String, unique: true },
        password: String,
        role: {
            type: String,
            enum: ['dashboard', 'agent', 'admin'],
            default: 'dashboard',
        },
        status: {
            type: String,
            enum: ['active', 'pending'],
            default: 'active',
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
