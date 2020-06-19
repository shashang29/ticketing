import mongoose from 'mongoose';
import { app } from './app';

const connectToDB = async () => {
    console.log('Starting up')
    if (!process.env.JWT_KEY) {
        throw new Error('jwt key must be definded')
    }
    if (!process.env.MONGO_URI) {
        throw new Error('jwt key must be definded')
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('connected to db')
    } catch (err) {
        console.log(err)
    }
}

app.listen(3000, () => {
    console.log('Running on 3000');
});

connectToDB();