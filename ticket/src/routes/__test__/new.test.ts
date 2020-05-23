import request from 'supertest';
import { app } from '../../app';

it('listening for post requests', async () => {
    const res = await request(app)
        .post('/api/tickets')
        .send({});

    expect(res.status).not.toEqual(404);
});

it('only accessed when user is authenticated', async () => {
    const res = await request(app)
        .post('/api/tickets')
        .send({})
        .expect(401)
});

it('returns status other than 401 if signed in', async () => {
    const res = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signup())
        .send({});

    expect(res.status).not.toEqual(401);
});

it('invalid if title is invalid', async () => {
    const res = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signup())
        .send({
            title: '',
            price: 10
        })
        .expect(400)
});

it('invalid if price is invalid', async () => {
    const res = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signup())
        .send({
            title: 'abcd',
            price: -10
        })
        .expect(400)
});


it('create a ticket if everything is valid', async () => {
    const res = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signup())
        .send({
            title: 'abcd',
            price: 20
        })
        .expect(201);


});

