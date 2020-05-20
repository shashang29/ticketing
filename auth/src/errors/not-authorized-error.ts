import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
    statusCode = 401;
    serializeErrors() {
        return [{ message: 'not authorized' }];
    }
    constructor() {
        super('not authorized');
        Object.setPrototypeOf(this, NotAuthorizedError.prototype)
    }
}