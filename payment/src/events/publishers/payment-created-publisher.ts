import { Publisher, PaymentCreatedEvent, Subjects } from "@ss-ticketing/common";



export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}