import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';


it('returns 404 if no ticket is found', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .get(`/api/tickets/${id}`)
        .send()
        .expect(404);

});


it('returns ticket is found', async () => {
    const title = 'concert';
    const price = 20;

    const createTicketRes = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signup())
        .send({
            title,
            price
        })
        .expect(201);

    const ticketRes = await request(app)
        .get(`/api/tickets/${createTicketRes.body.id}`)
        .send()
        .expect(200);

    expect(ticketRes.body.title).toEqual(title);
    expect(ticketRes.body.price).toEqual(price);

});