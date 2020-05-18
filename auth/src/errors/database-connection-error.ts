export class DatabaseConnectionError extends Error {
    reason = 'Falied to connect to database'
    constructor() {
        super();

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}

