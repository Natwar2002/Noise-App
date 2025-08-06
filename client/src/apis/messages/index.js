import axiosConfig from "../../config/axiosConfig";

export const getGroupMessagesRequest = async ({ token, group, limit, offset }) => {
    try {
        const response = await axiosConfig.get(`/messages/group-messages/${group}`, {
            params: {
                limit: limit || 20,
                offset: offset || 1,
            },
            headers: {
                "x-access-token": token
            },
        });
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.log("Error in getGroupMessagesRequest: ", error);
        throw error.response.data;
    }
} 

export const getDMsMessagesRequest = async ({ token, dm, limit, offset }) => {
    try {
        const response = await axiosConfig.get(`/messages/dm-messages/${dm}`, {
            params: {
                limit: limit || 20,
                offset: offset || 1,
            },
            headers: {
                "x-access-token": token
            },
        });
        return response.data.data;
    } catch (error) {
        console.log("Error in getDMsMessagesRequest: ", error);
        throw error.response.data;
    }
}