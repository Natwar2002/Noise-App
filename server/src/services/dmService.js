import dmRepository from "../repositories/dmRepository.js";
import ClientError from "../utils/erros/clientError.js"

export const getDmService = async (userId) => {
    try {
        const dms = await dmRepository.getDmsByUserId(userId);
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