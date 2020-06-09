import mongoose from 'mongoose';
import { app } from './app';
import { natsWrapper } from './nats-wrapper';


const connectToDB = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('jwt key must be definded')
    }
    if (!process.env.MONGO_URI) {
        throw new Error('mongo_uri key must be definded')
    }
    if (!process.env.NATS_URL) {
        throw new Error('NATS_URL key must be definded')
    }
    if (!process.env.NATS_CLUSTER_ID) {
        throw new Error('NATS_CLUSTER_ID key must be definded')
    }
    if (!process.env.NATS_CLIENT_ID) {
        throw new Error('NATS_CLIENT_ID key must be definded')
    }

    try {
        await natsWrapper.connect(
            process.env.NATS_CLUSTER_ID,
            process.env.NATS_CLIENT_ID,
            process.env.NATS_URL
        );
        natsWrapper.client.on('close', () => {
            console.log('Nats connected closed!!!!!!');
            process.exit();
        });
        process.on('SIGINT', () => natsWrapper.client.close());
        process.on('SIGTERM', () => natsWrapper.client.close());

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
    console.log('Running on 3000!!!!!');
});

connectToDB();