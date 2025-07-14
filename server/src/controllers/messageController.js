import { getMessagesService } from '../services/messageService.js';
import { customErrorResponse, internalErrorResponse, successResponse } from '../utils/responses/responseObject.js';

export const getMessagesController = async (req, res) => {
    try {
        const response = await getMessagesService(req.body);
        return res.status(200).json(successResponse(response, "Messages fetched successfully"));
    } catch (error) {
        console.log('Error in get messages controller', error);
        if (error?.status) {
            res.status(error?.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}