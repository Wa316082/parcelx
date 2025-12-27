import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema(
    {
        trackingId: String,
        senderName: String,
        receiverName: String,
        phone: String,

        paymentType: {
            type: String,
            enum: ['cod', 'prepaid'],
        },

        amount: Number,
        status: {
            type: String,
            enum: ['pending', 'picked', 'in_transit', 'delivered'],
            default: 'pending',
        },

        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        agentId: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
