import userRepository from '../repositories/userRepository.js';
import ValidationError from '../utils/erros/validationError.js';
import ClientError from '../utils/erros/clientError.js';
import { createJWT } from '../utils/auth/authUtils.js';
import bcrypt from 'bcrypt';

export async function signUpService(data) {
    try {
        const requiredFields = ['email', 'password', 'firstName', 'lastName', 'username'];
        for (const field of requiredFields) {
            if (!data[field]) {
                throw new ClientError({
                    explanation: "Invalid data sent from the client",
                    message: `${field} is required`,
                    status: 400
                });
            }
        }
        const newUser = await userRepository.signUpUser(data);
        return newUser;
    } catch (error) {
        console.log("Error in Sign up service: ", error);
        throw error;
    }
}

export async function signInService(data) {
    try {
        const user = await userRepository.getByUsername(data.username);
        if (!user) {
            throw new ClientError({
                explanation: "Invalid data sent from the client",
                message: "No registered user found with this username",
                status: 400
            });
        }

        const isMatch = bcrypt.compareSync(data.password, user.password);
        if (!isMatch) {
            throw new ClientError({
                explanation: "Invalid data sent from the client",
                message: "Invalid password, please try again",
                status: 400
            });
        }

        return {
            username: user.username,
            avatar: user.avatar,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            _id: user._id,
            token: createJWT({ id: user._id, email: user.email })
        }
    } catch (error) {
        console.log("Error in Sign in service: ", error);
        throw error;
    }
}