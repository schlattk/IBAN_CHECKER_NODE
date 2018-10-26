const request = require('supertest');
const app = require('../app')

describe('Test the root path', () => {
    test('It should respond to the GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the iban path', () => {
    test('It should respond to the get method', () => {
        return request(app).get("/iban").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})
