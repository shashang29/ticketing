import nats from 'node-nats-streaming';
import { TicketCreatedListener } from './events/ticket-created-listener';

console.clear();

const stan = nats.connect('ticketing', '123', {
    url: 'http://localhost:4222'
});

stan.on('connect', () => {
    console.log('listener connected to nats')
    stan.on('close', () => {
        console.log('closing connection')
        process.exit();
    });
    new TicketCreatedListener(stan).listen();
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());



