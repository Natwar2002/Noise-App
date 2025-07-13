import { getDmService } from '../services/dmService.js';
import { customErrorResponse, internalErrorResponse, successResponse } from '../utils/responses/responseObject.js';

export const getDmsController = async (req, res) => {
    try {
        const response = await getDmService(req.user.id);
        return res.status(200).json(successResponse(response, "DMs fetched successfully"));
    } catch (error) {
        console.log("Error in get DMs controller: ", error);
        if (error.status) {
            return res.status(error.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}