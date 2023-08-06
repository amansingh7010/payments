import { Subjects, Publisher, PaymentCreatedEvent } from '@asinghs/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
