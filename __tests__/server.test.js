const request = require('supertest');
const express = require('express');
const path = require('path');
const { array } = require('prop-types');
const app = require('../src/server/server');
const db = require('../src/server/models/dbModels');

afterAll(async () => {
  await db.end();
});
describe('GET *', () => {
  it('responds with index.html for / route', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('text/html');
    expect(response.text).toContain('<title>NestEgg</title>');
  });

  it('responds with index.html for /invalidroute route', async () => {
    const response = await request(app).get('/invalidroute');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('text/html');
    expect(response.text).toContain('<title>NestEgg</title>');
  });

  it('responds with index.html for /blank route', async () => {
    const response = await request(app).get('/blank');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('text/html');
    expect(response.text).toContain('<title>NestEgg</title>');
  });

  it('responds with index.html for all invalid routes', async () => {
    const response = await request(app).get('/notworking');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('text/html');
    expect(response.text).toContain('<title>NestEgg</title>');
  });
});

describe('GET /example', () => {
  it('responds with a list of categories', async () => {
    const response = await request(app).get('/example');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toEqual([
      { category_id: 1, category_name: 'housing' },
      { category_id: 2, category_name: 'utilities' },
      { category_id: 3, category_name: 'transport' },
      { category_id: 4, category_name: 'debt' },
      { category_id: 5, category_name: 'shopping' },
      { category_id: 6, category_name: 'entertainment' },
      { category_id: 7, category_name: 'misc' },
    ]);
  });
});

describe('POST /signup', () => {
  it('should create a new user and return a success message', async () => {
    const response = await request(app)
      .post('/signup')
      .send({ username: 'newuser', password: 'password123' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(`{ signUpMessage: 'Sign up successful!' }`);
  });

  it('should not create a user if the username already exists', async () => {
    const response = await request(app)
      .post('/signup')
      .send({ username: 'existinguser', password: 'password123' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ signUpMessage: 'username already exists' });
  });

  it('should return an error if username or password is missing', async () => {
    const response = await request(app)
      .post('/signup')
      .send({ username: 'testuser' });
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: 'Username and password are required',
    });
  });
});
