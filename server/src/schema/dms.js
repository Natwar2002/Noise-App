import mongoose from 'mongoose';

const dmSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ]
}, { timestamps: true });

dmSchema.path('participants').validate(function (val) {
    return val.length === 2;
}, 'DM must have exactly two participants');

dmSchema.index({ participants: 1 }, { unique: true });

const DM = mongoose.model('DM', dmSchema);
export default DM;