import dmRepository from "../repositories/dmRepository.js";
import ClientError from "../utils/erros/clientError.js"

export const getDmService = async (sender) => {
    try {
        const dms = await dmRepository.getDmsByUserId(sender);
        if (!dms) {
            throw new ClientError({
                message: "No direct messages found for this user.",
                explantion: "The user does not have any direct messages.",
                status: 404
            });
        }
        return dms;
    } catch (error) {
        console.log("Error in getDmService: ", error);
        throw error;
    }
}

export const createDMService = async (sender, receiver) => {
    try {
        if (!sender || !receiver) {
            throw new ClientError({
                message: "Invalide data sent from client",
                explanation: "Sender and receiver ID is Required",
                status: 400
            });
        }
        const participantIds = [sender, receiver].sort();
        const group = await dmRepository.create({ participants: participantIds });
        return group;
    } catch (error) {
        console.log("Error in create DM service: ", error);
        throw error;
    }
}