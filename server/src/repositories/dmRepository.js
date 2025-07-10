import DM from '../schema/dms.js';
import crudRepository from './crudRepository.js';

const dmRepository = {
    ...crudRepository(DM),
}

export default dmRepository;