export interface IError {
    message: string;
    code: number;
    data?: any;
}

export class NotFoundError implements IError {
    code: number;
    message: string;
    data: any;

    constructor(message?: string, data?: any) {
        this.code = 404
        this.message = message || 'Resource not found'
        this.data = data
    }
}

export class ConflictError implements IError {
    code: number;
    message: string;
    data: any;

    constructor(message?: string, data?: any) {
        this.code = 409
        this.message = message || 'Resource already exists'
        this.data = data
    }
}

export class BadRequestError implements IError {
    code: number;
    message: string;
    data: any;

    constructor(message?: string, data?: any) {
        this.code = 400
        this.message = message || 'Bad request'
        this.data = data
    }
}

export default Error;

