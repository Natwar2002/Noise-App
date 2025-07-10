class ValidationError extends Error {
    constructor(error, message) {
        super(message);
        this.name = 'ValidationError';
        let explantion = [];
        Object.keys(error.error).forEach(key => {
            explantion.push(error.error[key]);
        });
        this.explantion = explantion;
        this.message = message;
        this.status = error?.stauts;
    }
}

export default ValidationError;