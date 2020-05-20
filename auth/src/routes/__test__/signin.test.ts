import request from 'supertest';
import { app } from '../../app';

it('fails when user does not exist', async () => {
    return request(app)
        .post('/api/users/signin')
        .send({
            email: 'test111@a.com',
            password: 'aaaa'
        })
        .expect(400);
});


it('fails when incorrect password is supplied', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@a.com',
            password: 'aaaa'
        })
        .expect(201);

    await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test111@a.com',
            password: 'aaa'
        })
        .expect(400);
});

it('responds with cookie', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@a.com',
            password: 'aaaa'
        })
        .expect(201);

    const response = await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@a.com',
            password: 'aaaa'
        })
        .expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();
});