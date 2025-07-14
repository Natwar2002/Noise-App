import ClientError from "../utils/erros/clientError.js";
import messageRepository from '../repositories/messageRepository.js';

export const getMessagesService = async (messageParams) => {
    try {
        if (!messageParams) {
            throw new ClientError({
                message: "Data not found",
                explanation: "Message params are required",
                status: 404
            });
        }
        const page = 1;
        const limit = 20;
        const messages = await messageRepository.getMessages(messageParams, page, limit)
        return messages;
    } catch (error) {
        console.log("Error in get messages service: ", error?.explanation || error?.message || error);
        throw error;
    }
}

export const createMessageService = async (messageData) => {
    try {
        if (!messageData) {
            throw new ClientError({
                message: "Message Data not found",
                explanation: "Message data is required",
                status: 404
            });
        }
        const newMessage = await messageRepository.create(messageData);
        const messageDetails = await messageRepository.getMessageDetails(newMessage._id);
        return messageDetails;
    } catch (error) {
        console.log("Create message service error: ", error?.explanation || error?.message || error);
        throw error;
    }
}