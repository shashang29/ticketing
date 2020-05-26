import { Publisher, Subjects, TicketCreatedEvent } from '@ss-ticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}