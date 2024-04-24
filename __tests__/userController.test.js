const request = require('supertest');
const express = require('express');
const path = require('path');
const app = require('../src/server/server');
const db = require('../src/server/models/dbModels');

jest.mock('../src/server/models/dbModels', () => ({
  query: jest.fn(),
}));

function mockQuery(mockResponse) {
  db.query.mockImplementation((query, params) => {
    // console.log('Mocked query:', query);
    // console.log('Mocked params:', params);
    if (query.includes('INSERT INTO users')) {
      return Promise.resolve({ rows: [{ user_id: 1 }] });
    }
    return Promise.resolve(mockResponse);
  });
}
describe('POST /signup', () => {
  it('should create a new user and return a success message', async () => {
    // Mock the database response for a successful user creation
    mockQuery({ rows: [] }); // No existing user

    const response = await request(app)
      .post('/auth/signup')
      .send({ username: 'newuser', password: 'password123' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual('Sign up successful!');
    expect(db.query).toHaveBeenCalledTimes(3); // Check if queries were called passing middleware
  });

  it('should return an error if username already exists', async () => {
    // Mock the database response for an existing user
    mockQuery({ rows: [{ username: 'existinguser' }] });

    const response = await request(app)
      .post('/auth/signup')
      .send({ username: 'existinguser', password: 'password123' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual('username already exists');
  });
});

describe('POST /signin', () => {
  it('should sign in successfully and return a success message', async () => {
    // Mock the database response for a successful sign-in
    mockQuery({
      rows: [
        {
          user_id: 1,
          password:
            '$2b$10$F68.gywea.x/nGbWJuZlqu3v9p1EuIfVNsVIMnQjdpNk2ZDFoxZr.',
        },
      ],
    }); // Existing user with hashed password

    const response = await request(app)
      .post('/auth/signin')
      .send({ username: 'existinguser', password: 'mypass' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual('Sign in successful');
  });

  it('should return an error if username and password combination is not recognized', async () => {
    // Mock the database response for a non-existing user or incorrect password
    mockQuery({ rows: [] });

    const response = await request(app)
      .post('/auth/signin')
      .send({ username: 'nonexistentuser', password: 'wrongpassword' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      'Username and password combination is not recognized',
    );
  });
});
