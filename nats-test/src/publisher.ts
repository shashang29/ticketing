import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear()
const stan = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
});

stan.on('connect', async () => {
    console.log('connected to nats')

    const publisher = new TicketCreatedPublisher(stan);
    try {
        await publisher.publish({
            id: '',
            title: '',
            price: 20
        })
    } catch (err) {
        console.log(err)
    }

})