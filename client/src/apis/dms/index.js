import axiosConfig from "../../config/axiosConfig";

export const getDMsRequest = async (token) => {
    try {
        const response = await axiosConfig.get('/dms', {
            headers: {
                "x-access-token": token
            }
        });
        return response.data.data;
    } catch (error) {
        console.log("Error in getDMsRequest: ", error);
        throw error.response.data;
    }
} 