import Message from "../schema/message.js";
import crudRepository from "./crudRepository.js";

const messageRepository = {
    ...crudRepository(Message),

    getMessages: async function (messageParams, page, limit) {
        const messages = await Message.find(messageParams).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).populate('senderId', 'username email avatar firstName lastName');
        return messages;
    },

    getMessageDetails: async function (messageId) {
        const message = await Message.findById(messageId).populate(
            'sender',
            'username email avatar firstName lastName'
        );
        return message;
    }
}

export default messageRepository;