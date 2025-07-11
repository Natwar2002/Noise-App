import Group from '../schema/group.js';
import crudRepository from './crudRepository.js';

const groupRepository = {
    ...crudRepository(Group),
    getGroupByUserId: async (userId) => {
        const groups = await Group.find({ members: userId })
            .populate('admin', 'username firstName lastName avatar')
            .populate('members', 'username firstName lastName avatar');
        return groups;
    }
}

export default groupRepository;