import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Falied to connect to database'
    constructor() {
        super('Falied to connect to database');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [
            { message: this.reason }
        ];
    }
}

