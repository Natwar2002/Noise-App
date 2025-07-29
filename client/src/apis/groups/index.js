import axiosConfig from "../../config/axiosConfig";

export const getGroupsRequest = async (token) => {
    try {
        const response = await axiosConfig.get('/groups', {
            headers: {
                "x-access-token": token
            }
        });
        return response.data.data;
    } catch (error) {
        console.log("Error in getGroupsRequest: ", error);
        throw error.response.data;
    }
} 