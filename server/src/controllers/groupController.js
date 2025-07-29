import { addUserToGroupService, createGroupService, deleteGroupService, getGroupService, getGroupsService, updateGroupService } from '../services/groupService.js';
import { customErrorResponse, internalErrorResponse, successResponse } from '../utils/responses/responseObject.js';

export const createGroupController = async (req, res) => {
    try {
        const userId = req.user._id;
        const group = await createGroupService(userId, req.body);
        return res.status(201).json(successResponse(group, "Group created successfully"));
    } catch (error) {
        console.log("Error in create group controller: ", error);
        if (error.status) {
            return res.status(error.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}

export const getGroupsController = async (req, res) => {
    try {
        const userId = req.user._id;
        const groups = await getGroupsService(userId);
        return res.status(200).json(successResponse(groups, "Groups fetched successfully"));
    } catch (error) {
        console.log("Error in get groups controller: ", error);
        if (error.status) {
            return res.status(error.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}

export const updateGroupController = async (req, res) => {
    try {
        const groupId = req.params.id;
        const groupData = req.body;
        const updatedGroup = await updateGroupService(groupId, groupData, req.user._id);
        return res.status(200).json(successResponse(updatedGroup, "Group updated successfully"));
    } catch (error) {
        console.log("Error in update group controller: ", error);
        if (error.status) {
            return res.status(error.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}

export const deleteGroupController = async (req, res) => {
    try {
        const groupId = req.params.id;
        const userId = req.user._id;
        await deleteGroupService(groupId, userId);
        return res.status(200).json(successResponse(null, "Group deleted successfully"));
    } catch (error) {
        console.log("Error in delete group controller: ", error);
        if (error.status) {
            return res.status(error.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}

export const addUserToGroupController = async (req, res) => {
    try {
        const groupId = req.params.id;
        const userId = req.body.userId;
        const adminId = req.user._id;
        const updatedGroup = await addUserToGroupService(groupId, userId, adminId);
        return res.status(200).json(successResponse(updatedGroup, "User added to group successfully"));
    } catch (error) {
        console.log("Error in add user to group controller: ", error);
        if (error.status) {
            return res.status(error.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}

export const getGroupByIdController = async (req, res) => {
    try {
        const response = await getGroupService(req.params.groupId);
        return res.status(200).json(successResponse(response, "Group fetched successfully"));
    } catch (error) {
        console.log("Error in get Group By ID controller: ", error);
        if (error.status) {
            return res.status(error.status).json(customErrorResponse(error));
        }
        return res.status(500).json(internalErrorResponse(error));
    }
}