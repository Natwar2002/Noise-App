import { JWT_SECRET } from '../config/serverConfig.js';
import jwt from 'jsonwebtoken';
import { customErrorResponse, internalErrorResponse } from '../utils/responses/responseObject.js';
import userRepository from '../repositories/userRepository.js';

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json(customErrorResponse({
                message: "No token provided",
                explanation: "Authentication token is required to access this resource",
            }));
        }

        const response = jwt.verify(token, JWT_SECRET);
        if (!response) {
            return res.status(401).json(customErrorResponse({
                message: "Invalid token",
                explanation: "The provided token is invalid or expired",
            }));
        }
        const user = await userRepository.getById(response.id);
        if (!user) {
            return res.status(404).json(customErrorResponse({
                message: "User not found",
                explanation: "The user associated with this token does not exist",
            }));
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Error in authentication middleware: ", error);
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json(customErrorResponse({
                message: "Authentication failed",
                explanation: "The provided token is invalid or has expired",
            }));
        }
        return res.status(500).json(internalErrorResponse({
            message: "Internal server error",
            explanation: "An unexpected error occurred while processing your request",
        }));
    }
}