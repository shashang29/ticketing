import { Listener, TicketUpdatedEvent, Subjects } from '@ss-ticketing/common';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../models/ticket';


export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;

    async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
        const { id, title, price } = data;

        const ticket = await Ticket.findById(id);

        if (!ticket) {
            throw new Error('Ticket not found');
        }

        ticket.set({ title, price });
        await ticket.save();

        msg.ack();
    }
}
