const request = require('supertest');
const express = require('express');
const path = require('path');
const app = require('../src/server/server');
const db = require('../src/server/models/dbModels');

afterAll(async () => {
  await db.end();
});
describe('GET various path, all should resolve to index.html', () => {
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

describe('GET information from database with server routes', () => {
  it('responds with a list of categories', async () => {
    const response = await request(app).get('/testGetCategory');
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

  it('responds with a single user', async () => {
    const response = await request(app).get('/testGetUser');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          user_id: 1,
          username: 'TestUser',
        }),
      ]),
    );
  });
});
