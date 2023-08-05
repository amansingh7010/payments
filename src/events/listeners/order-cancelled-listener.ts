import { Message } from 'node-nats-streaming';

import {
  OrderCancelledEvent,
  Subjects,
  Listener,
  OrderStatus,
} from '@asinghs/common';
import { QUEUE_GROUP_NAME } from './queue-group-name';
import { Order } from '../../models/order';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
  queueGroupName = QUEUE_GROUP_NAME;

  async onMessage(data: OrderCancelledEvent['data'], msg: Message) {
    const order = await Order.findByIdAndPreviousVersion(data);

    if (!order) {
      throw new Error('Order not found');
    }

    order.set({ status: OrderStatus.Cancelled });
    await order.save();

    msg.ack();
  }
}
