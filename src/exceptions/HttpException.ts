class HttpException extends Error {
    status: number;
    message: string;
    json: object;
    constructor(status: number, message: string, json: object = {}) {
        super(message);
        this.status = status;
        this.message = message;
        this.json = json;
    }
}
   
export default HttpException;