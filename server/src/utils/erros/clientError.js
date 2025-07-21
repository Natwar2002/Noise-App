class ClientError extends Error {
    constructor(error) {
        super();
        this.name = 'ClientError';
        this.message = error?.message;
        this.explanation = error?.explanation;
        this.status = error?.status;
    }
}

export default ClientError;