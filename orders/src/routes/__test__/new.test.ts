import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { Order, OrderStatus } from '../../models/orders';
import { Ticket } from '../../models/ticket';
import { natsWrapper } from '../../nats-wrapper';

it('error if ticket does not exist', async () => {
    const ticketId = mongoose.Types.ObjectId();

    await request(app)
        .post('/api/orders')
        .set('Cookie', global.signup())
        .send({ ticketId })
        .expect(404)
});

it('error if ticket is already reserved', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20,
        id: mongoose.Types.ObjectId().toHexString()
    })
    await ticket.save();
    const order = Order.build({
        ticket,
        userId: '123',
        status: OrderStatus.Created,
        expiresAt: new Date()
    })
    await order.save();

    await request(app)
        .post('/api/orders')
        .set('Cookie', global.signup())
        .send({ ticketId: ticket.id })
        .expect(400)
});

it('reserves a ticket ', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20,
        id: mongoose.Types.ObjectId().toHexString()
    })
    await ticket.save();

    await request(app)
        .post('/api/orders')
        .set('Cookie', global.signup())
        .send({ ticketId: ticket.id })
        .expect(201)
});

it('emit an order created order', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20,
        id: mongoose.Types.ObjectId().toHexString()
    })
    await ticket.save();

    await request(app)
        .post('/api/orders')
        .set('Cookie', global.signup())
        .send({ ticketId: ticket.id })
        .expect(201);

    expect(natsWrapper.client.publish).toHaveBeenCalled();

});
