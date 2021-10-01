const request = require('supertest');
const app = require('./app').app;
const build = require('./app').productBuilder;


//An object to add
let objToAdd = {
    name: "name",
    description: "desc",
    price: 25.99
};

//An object to test the update
let objUpdate = {
    _id: "", //We will get this after we have created the record
    name: "new name",
    description: "new desc",
    price: 99.99
};

// TEST THE REST API ENDPOINT FOR POST
describe('CREATE request', () => {
    test('CREATE product test', async () => {
        const res = await request(app).post('/product/create').send(objToAdd);
        expect(res.statusCode).toBe(201);
    });
});

// TEST THE REST API ENDPOINT FOR GET
describe('GET requests', () => {
    test('GET products/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read');
        expect(res.statusCode).toBe(200);
    });

    test('GET bad endpoint, expect 404', async () => {
      const res = await request(app).get('/badEndPoint');
      expect(res.statusCode).toBe(404);
    });
});

// TEST THE DATA 
describe('GET requests', () => {
    test('GET product/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read');
        objUpdate._id = res.body[0]._id;
        expect(res.statusCode).toBe(200);
        expect(res.body[0].name).toBe(objToAdd.name);
        expect(res.body[0].description).toBe(objToAdd.description);
        expect(res.body[0].price).toBe(objToAdd.price);
    });
});

// TEST THE REST API ENDPOINT FOR PUT
describe('UPDATE request', () => {
    test('UPDATE product test', async () => {
        const res = await request(app).put(`/product/update/${objUpdate._id}`).send(objUpdate);
        expect(res.statusCode).toBe(202);
    });

});

// TEST THE NEW DATA 
describe('GET requests', () => {
    test('GET product/read endpoint, expect 200 and updated details', async () => {
        const res = await request(app).get('/product/read');
        expect(res.statusCode).toBe(200);
        expect(res.body[0]).toStrictEqual(objUpdate);
    });
});

// READ BY ID
describe('GET request by ID', () => {
    test('GET product/read endpoint, expect 200 and updated details', async () => {
        const res = await request(app).get(`/product/read/${objUpdate._id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body[0]).toStrictEqual(objUpdate);
    });
});

// DELETE BY ID
describe('DELETE request by ID', () => {
    test('DELETE product/delete endpoint, expect 202 and then a get fails', async () => {
        const res = await request(app).delete(`/product/delete/${objUpdate._id}`);
        expect(res.statusCode).toBe(202);
    });
});
// NOW THE GET SHOULD FAIL
describe('GET request by ID', () => {
    test('GET product/read endpoint, expect 200 and updated details', async () => {
        const res = await request(app).get(`/product/read/${objUpdate._id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toStrictEqual([]);
    });
});

// UNIT TEST THE PRODUCT BUILDER
describe('Unit Tests', () => {
    test('product object builder', () => {
        expect(productBuilder("name", "desc", 25.99)).toEqual(objToAdd);
    });

});
