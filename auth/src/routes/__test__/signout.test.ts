import request from 'supertest';
import { app } from '../../app';

it('signout by removing cookie', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@a.com',
            password: 'aaaa'
        })
        .expect(201);

    const res = await request(app)
        .post('/api/users/signout')
        .expect(200);

    expect(res.get('Set-Cookie')).toBeDefined();
});
