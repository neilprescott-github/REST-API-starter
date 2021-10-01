const request = require('supertest');
const app = require('./app').app;
const build = require('./app').productBuilder;

// TEST THE REST API ENDPOINT FOR GET
describe('GET requests', () => {
    
    test('GET product/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read')
        expect(res.statusCode).toBe(200);
    });

    test('GET bad endpoint, expect 404', async () => {
      const res = await request(app).get('/badEndPoint')
      expect(res.statusCode).toBe(404);
    });

});

// TEST THE REST API ENDPOINT FOR POST
describe('CREATE request', () => {
    
    test('CREATE product test', async () => {
        const res = await request(app).post('/product/create').send({
            name: "name",
            description: "desc",
            price: 25.99
        });
        expect(res.statusCode).toBe(201);
    });

});

// UNIT TEST THE PRODUCT BUILDER
describe('Unit Tests', () => {

    let obj = {
        name: "name",
        description: "desc",
        price: 25.99
    };
    test('product object builder', () => {
        expect(productBuilder("name", "desc", 25.99)).toEqual(obj);
    });

});
