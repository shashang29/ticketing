import { Publisher, OrderCancelledEvent, Subjects } from '@ss-ticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}