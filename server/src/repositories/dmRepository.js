import DM from '../schema/dms.js';
import crudRepository from './crudRepository.js';

const dmRepository = {
    ...crudRepository(DM),
    getDmsByUserId: async function (sender) {
        const dms = await DM.find({ participants: sender }).populate('participants', 'firstName lastName username avatar')
            .sort({ updatedAt: -1 })
            .exec();
        return dms;
    },
}

export default dmRepository;