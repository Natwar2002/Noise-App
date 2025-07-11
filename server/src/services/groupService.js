import groupRepository from "../repositories/groupRepository.js"
import ClientError from "../utils/erros/clientError.js"

export const createGroupService = async (userId, groupData) => {
    try {
        if (!groupData) {
            throw new ClientError({
                message: "Invalide data sent from client",
                explanation: "Group data is Required",
                status: 400
            });
        }
        const group = await groupRepository.create({ ...groupData, admin: userId, members: [userId] });
        return group;
    } catch (error) {
        console.log("Error in create group service: ", error);
        throw error;
    }
}

export const getGroupsService = async (userId) => {
    try {
        const groups = await groupRepository.getGroupByUserId(userId);
        return groups;
    } catch (error) {
        console.log("Error in get groups service: ", error);
        throw error;
    }
}

export const updateGroupService = async (groupId, groupData, adminId) => {
    try {
        if (!groupId) {
            throw new ClientError({
                message: "Group ID is required",
                explanation: "You must provide a group ID to update groups",
                status: 400
            });
        }
        if (!groupData) {
            throw new ClientError({
                message: "Invalid data sent from client",
                explanation: "Group data is Required",
                status: 400
            });
        }
        const group = await groupRepository.getById(groupId);
        if (!group) {
            throw new ClientError({
                message: "Group not found",
                explanation: "The group you are trying to update does not exist",
                status: 404
            });
        }
        if (group?.admin?.toString() !== adminId?.toString()) {
            throw new ClientError({
                message: "Unauthorized action",
                explanation: "Only the group admin can update the group",
                status: 403
            });
        }
        const updatedGroup = await groupRepository.update(groupId, groupData);
        return updatedGroup;
    } catch (error) {
        console.log("Error in update group service: ", error?.explanation || error?.message || error);
        throw error;
    }
}

export const deleteGroupService = async (groupId, userId) => {
    try {
        const group = await groupRepository.getById(groupId);
        if (!group) {
            throw new ClientError({
                message: "Group not found",
                explanation: "The group you are trying to delete does not exist",
                status: 404
            });
        }
        if (group.admin.toString() !== userId.toString()) {
            throw new ClientError({
                message: "Unauthorized action",
                explanation: "Only the group admin can delete the group",
                status: 403
            });
        }
        await groupRepository.delete(groupId);
        return { message: "Group deleted successfully" };
    } catch (error) {
        console.log("Error in delete group service: ", error);
        throw error;
    }
}

export const addUserToGroupService = async (groupId, userId, adminId) => {
    try {
        if (!groupId || !userId) {
            throw new ClientError({
                message: "Group ID and User ID are required",
                explanation: "You must provide both a group ID and a user ID to add a user to a group",
                status: 400
            });
        }
        const group = await groupRepository.getById(groupId);
        if (!group) {
            throw new ClientError({
                message: "Group not found",
                explanation: "The group you are trying to add a user to does not exist",
                status: 404
            });
        }
        if (group.admin.toString() !== adminId.toString()) {
            throw new ClientError({
                message: "Unauthorized action",
                explanation: "Only the group admin can add users to the group",
                status: 403
            });
        }
        if (group.members.includes(userId)) {
            throw new ClientError({
                message: "User already in group",
                explanation: "The user is already a member of this group",
                status: 400
            });
        }
        group.members.push(userId);
        await group.save();
        return group;
    } catch (error) {
        console.log("Error in add user to group service: ", error);
        throw error;
    }
}