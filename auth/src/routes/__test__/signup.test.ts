import request from 'supertest';
import { app } from '../../app';

it('returns 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@a.com',
            password: 'aaaa'
        })
        .expect(201);
});

it('returns a 400 with invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test.com',
            password: 'aaaa'
        })
        .expect(400);
});

it('returns a 400 with invalid password', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test.com',
            password: 'a'
        })
        .expect(400);
});

it('returns a 400 with invalid password and email', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@a.com'
        })
        .expect(400);

    await request(app)
        .post('/api/users/signup')
        .send({
        })
        .expect(400);
});

it('does not allow dublicate email', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@a.com',
            password: 'aaaa'
        })
        .expect(201);
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@a.com',
            password: 'aaaa'
        })
        .expect(400);
});

it('sets cookie after signup', async () => {
    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@a.com',
            password: 'aaaa'
        })
        .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
});