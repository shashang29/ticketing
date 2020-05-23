import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';


it('401 if user is not authenticated', async () => {
    const id = mongoose.Types.ObjectId().toHexString();

    await request(app)
        .put(`/api/tickets/${id}`)
        .send({
            title: 'qqq',
            price: 60
        })
        .expect(401);

});


it('returns 404 if no id is not found', async () => {
    const id = mongoose.Types.ObjectId().toHexString();

    await request(app)
        .put(`/api/tickets/${id}`)
        .set('Cookie', global.signup())
        .send({
            title: 'qqq',
            price: 60
        })
        .expect(404);
});

it('returns 401 if user does not own the ticket', async () => {

    const createTicketRes = await request(app)
        .post(`/api/tickets`)
        .set('Cookie', global.signup())
        .send({
            title: 'qqq',
            price: 60
        })
        .expect(201);

    await request(app)
        .put(`/api/tickets/${createTicketRes.body.id}`)
        .set('Cookie', global.signup())
        .send({
            title: 'qqssq',
            price: 60
        })
        .expect(401);

});

it('return error if ticket details are not valid', async () => {

    const cookie = global.signup()
    const createTicketRes = await request(app)
        .post(`/api/tickets`)
        .set('Cookie', cookie)
        .send({
            title: 'qqq',
            price: 60
        })
        .expect(201);


    await request(app)
        .put(`/api/tickets/${createTicketRes.body.id}`)
        .set('Cookie', cookie)
        .send({
            title: '',
            price: 60
        })
        .expect(400);

    await request(app)
        .put(`/api/tickets/${createTicketRes.body.id}`)
        .set('Cookie', cookie)
        .send({
            title: 'asa',
            price: -20
        })
        .expect(400);

});


it('updates tickets on valid', async () => {

    const cookie = global.signup()
    const createTicketRes = await request(app)
        .post(`/api/tickets`)
        .set('Cookie', cookie)
        .send({
            title: 'qqq',
            price: 60
        })
        .expect(201);

    const title = 'aaaa';
    const price = 55;
    await request(app)
        .put(`/api/tickets/${createTicketRes.body.id}`)
        .set('Cookie', cookie)
        .send({
            title,
            price
        })
        .expect(200);

    const res = await request(app)
        .get(`/api/tickets/${createTicketRes.body.id}`)
        .send();

    expect(res.body.title).toEqual(title);
    expect(res.body.price).toEqual(price);

});