import axiosConfig from "../../config/axiosConfig";

export const getMessagesRequest = async (token) => {
    try {
        const response = await axiosConfig.get('/messages', {
            headers: {
                "x-access-token": token
            }
        });
        console.log(response);
        return response.data.data;
    } catch (error) {
        console.log("Error in getMessagesRequest: ", error);
        throw error.response.data;
    }
} 