class CustomError<C extends string> extends Error {
    code? : C;
    message : string;
    statusCode : number;

    constructor({
        code,
        message,
        statusCode,
    } : {
        code? : C
        message : string,
        statusCode : number,
    }) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.code = code;
    }
}

export default CustomError