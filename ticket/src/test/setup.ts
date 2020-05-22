import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

declare global {
    namespace NodeJS {
        interface Global {
            signup(): string[];
        }
    }
}


let mongo: any;
beforeAll(async () => {
    process.env.JWT_KEY = 'asdf';
    mongo = new MongoMemoryServer();
    const mongoUri = await mongo.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    await mongo.stop();
});


//creating global function for ease

global.signup = () => {
    //build jwt payload
    const payload = {
        id: '123',
        email: 'test@test.com'
    };
    //create jwt
    const token = jwt.sign(payload, process.env.JWT_KEY!);
    //build session
    const session = { jwt: token };
    //turn it into json
    const sessionJSON = JSON.stringify(session);
    //encode to base64
    const base64 = Buffer.from(sessionJSON).toString('base64');
    //return a string which is a cookie
    return [`express:sess=${base64}`];
};