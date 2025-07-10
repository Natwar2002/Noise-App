class ClientError extends Error {
    constructor(error) {
        super();
        this.name = 'ClientError';
        this.message = error?.message;
        this.explantion = error?.explantion;
        this.status = error?.stauts;
    }
}

export default ClientError;