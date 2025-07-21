import { signInService, signUpService } from "../services/userService.js";
import { customErrorResponse, internalErrorResponse, successResponse } from '../utils/responses/responseObject.js';

export const signupController = async (req, res) => {
    try {
        const response = await signUpService(req.body);
        return res.status(201).json(successResponse(response, "User signed up successfully"));
    } catch (error) {
        console.log("Error in signupController: ", error);
        if (error.status) {
            return res.status(error.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}

export const signinController = async (req, res) => {
    try {
        const response = await signInService(req.body);
        return res.status(201).json(successResponse(response, "User signed in successfully"));
    } catch (error) {
        if (error.status) {
            return res.status(error.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}