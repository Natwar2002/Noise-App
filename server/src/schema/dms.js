import mongoose from 'mongoose';

const dmSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        }
    ]
}, { timestamps: true });

const DM = mongoose.model('DM', dmSchema);
export default DM;