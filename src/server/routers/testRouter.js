const express = require('express');
const testRouter = express.Router();
const db = require('../models/dbModels');

testRouter.get('/testGetCategory', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM categories;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

testRouter.get('/testGetUser', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE user_id = 1;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = testRouter;
