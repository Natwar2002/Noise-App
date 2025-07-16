import mongoose from 'mongoose';

const dmSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

const DM = mongoose.model('DM', dmSchema);
export default DM;