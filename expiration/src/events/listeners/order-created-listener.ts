import { Listener, OrderCreatedEvent, Subjects } from '@ss-ticketing/common';
import { Message } from 'node-nats-streaming';
import expirationQueue from '../../queues/expiration-queues';

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {

        const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
        await expirationQueue.add({
            orderId: data.id
        }, {
            delay
        });
        msg.ack();
    }
}

