import Group from '../schema/group.js';
import crudRepository from './crudRepository.js';

const groupRepository = {
    ...crudRepository(Group),
}

export default groupRepository;