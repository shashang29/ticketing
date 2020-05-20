import request from 'supertest';
import { app } from '../../app';

it('get response with current user', async () => {

    const cookie = await global.signup();
    const res = await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', cookie)
        .expect(200);

    expect(res.body.currentUser.email).toEqual('test@a.com')
});

it('get response with null if not auth', async () => {

    const res = await request(app)
        .get('/api/users/currentuser')
        .expect(200);

    expect(res.body.currentUser).toEqual(null)
});