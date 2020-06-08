import { Publisher, ExpirationCompleteEvent, Subjects } from '@ss-ticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}