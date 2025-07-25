import { JOIN_ROOM } from "../utils/constants/eventConstants.js";

export default function joinRoom(socket) {
    socket.on(JOIN_ROOM, async (data, cb) => {
        const roomId = data?.roomId;
        if (!roomId) {
            return cb?.({
                success: false,
                message: "Room ID is required to join a room"
            });
        }
        socket.join(roomId);
        console.log(`User ${socket.id} joined the room ${roomId}`);
        cb?.({
            success: true,
            message: "Successfully joined the room",
            data: roomId
        })
    })
}