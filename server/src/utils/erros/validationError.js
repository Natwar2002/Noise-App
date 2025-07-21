class ValidationError extends Error {
    constructor(error, message) {
        super(message);
        this.name = 'ValidationError';
        let explanation = [];
        Object.keys(error.error).forEach(key => {
            console.log("Eror key: ", error.error[key]);
            explanation?.push(error.error[key]);
        });
        this.explanation = explanation;
        this.message = message;
        this.status = 400;
    }
}

export default ValidationError;