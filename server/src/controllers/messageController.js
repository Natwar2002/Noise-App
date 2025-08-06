import { getMessagesService } from '../services/messageService.js';
import { customErrorResponse, internalErrorResponse, successResponse } from '../utils/responses/responseObject.js';

export const getGroupMessagesController = async (req, res) => {
    try {
        console.log(req.params);
        const response = await getMessagesService({ group: req?.params?.group }, req.query.page || 1, req.query.limit || 20);
        return res.status(200).json(successResponse(response, "Group Messages fetched successfully"));
    } catch (error) {
        console.log('Error in get group messages controller', error);
        if (error?.status) {
            res.status(error?.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}

export const getDMsMessagesController = async (req, res) => {
    try {
        console.log(req.params);
        const response = await getMessagesService({ dm: req?.params?.dm }, req.query.page || 1, req.query.limit || 20);
        return res.status(200).json(successResponse(response, "DM Messages fetched successfully"));
    } catch (error) {
        console.log('Error in get dm messages controller', error);
        if (error?.status) {
            res.status(error?.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}