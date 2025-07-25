import axiosConfig from '../../config/axiosConfig';

export const signupRequest = async (signupData) => {
    try {
        const response = await axiosConfig.post('/auth/signup', signupData);
        return response.data.data;
    } catch (error) {
        console.log("Error in signupRequest", error.response.data.err);
        throw error.response.data;
    }
}

export const signinRequest = async(signinData) => {
    try {
        const response = await axiosConfig.post('/auth/signin', signinData);
        return response.data.data;
    } catch (error) {
        console.log("Error in signinRequest", error.response.data);
        throw error.response.data;
    }
}