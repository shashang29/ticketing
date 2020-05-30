import { Publisher, OrderCreatedEvent, Subjects } from '@ss-ticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated
} 