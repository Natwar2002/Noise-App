import DM from '../schema/dms.js';
import crudRepository from './crudRepository.js';

const dmRepository = {
    ...crudRepository(DM),
    getDmsByUserId: async function (userId) {
        const dms = await DM.find({ userId }).populate('sender receiver messages')
            .sort({ updatedAt: -1 })
            .exec();
        return dms;
    },
}

export default dmRepository;