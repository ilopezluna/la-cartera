import { app } from '../app';
import supertest from 'supertest';
const requestWithSupertest = supertest(app);

describe('Hello world', () => {

    it('GET /', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World!');
    });

});