import { NEW_MESSAGE_EVENT, NEW_MESSAGE_RECEIVED_EVENT } from "../utils/constants.js/eventConstants.js";
import { createMessageService } from '../services/messageService.js';

export default function messageHandler(socket, io) {
    socket.on(NEW_MESSAGE_EVENT, async function createMessageHandler(data, cb) {
        const message = await createMessageService(data);
        if (data?.group) {
            io.to(group).emit(NEW_MESSAGE_RECEIVED_EVENT, message);
        }
        if (data?.dm) {
            io.to(dm).emit(NEW_MESSAGE_RECEIVED_EVENT, message);
        }
        cb?.({
            success: true,
            message: "Successfully created the message",
            data: messageResponse
        })
    })
}