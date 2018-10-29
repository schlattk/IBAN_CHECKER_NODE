
const request = require('supertest');
const app = require('../app')

describe('Test the root path', () => {
    test('It should respond to the GET method', () => {
        return request(app).get("/iban").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})

describe('Test the root path', () => {
    test('It should respond to the GET method', () => {
        return request(app).get("/iban/display").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})
