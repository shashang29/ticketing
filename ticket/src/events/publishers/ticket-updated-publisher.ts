import { Publisher, Subjects, TicketUpdatedEvent } from '@ss-ticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}