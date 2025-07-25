import { NEW_MESSAGE_EVENT, NEW_MESSAGE_RECEIVED_EVENT } from "../utils/constants.js/eventConstants.js";
import { createMessageService } from '../services/messageService.js';

export default function messageHandler(socket, io) {
    socket.on(NEW_MESSAGE_EVENT, async function createMessageHandler(data, cb) {
        const message = await createMessageService(data);
        if (!message) {
            return cb?.({
                success: false,
                message: "Failed to create message"
            });
        }
        if (!data?.dm && !data?.group) {
            return cb?.({
                success: false,
                message: "Room is required"
            })
        }
        if (data?.group) {
            io.to(data?.group).emit(NEW_MESSAGE_RECEIVED_EVENT, message);
        }
        if (data?.dm) {
            io.to(data?.dm).emit(NEW_MESSAGE_RECEIVED_EVENT, message);
        }
        cb?.({
            success: true,
            message: "Successfully created the message",
            data: message
        })
    })
}