import { Message } from 'node-nats-streaming';
import { Listerner } from './base-listener';
import { Subjects } from './subjects';
import { TicketCreatedEvent } from './ticket-created-event';

export class TicketCreatedListener extends Listerner<TicketCreatedEvent>{

    subject: Subjects.TicketCreated = Subjects.TicketCreated;
    onMessage(data: TicketCreatedEvent['data'], msg: Message) {
        console.log(data);

        msg.ack();
    }
}