import { customErrorResponse } from "../utils/responses/responseObject.js";

export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (error) {
            let explanation = [];
            let errorMessage = '';
            error?.errors?.forEach(key => {
                explanation.push(key.path[0] + ' ' + key.message);
                errorMessage += ':' + key.path[0] + ' ' + key.message;
            });
            res.status(400).json(customErrorResponse({
                message: 'Validation error' + errorMessage,
                explanation: explanation
            }));
        }
    }
}