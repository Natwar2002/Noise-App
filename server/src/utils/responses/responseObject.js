export const internalErrorResponse = (error) => {
    return {
        success: false,
        err: error,
        data: {},
        message: "Internal Server Error",
    };
};

export const customErrorResponse = (err) => {
    if (!err.message && !err.explanation) {
        return internalErrorResponse(err)
    }
    return {
        success: false,
        error: err.explanation,
        data: {},
        message: err.message
    };
};

export const successResponse = (data, message) => {
    return {
        success: true,
        data,
        message,
        error: {}
    };
};