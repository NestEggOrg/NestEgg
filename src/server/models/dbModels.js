const { Pool } = require('pg');
require('dotenv').config();

const PG_URI = process.env.DB_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

pool.on('connect', () => {
  console.log('connected to postgres');
});

pool.on('error', err => {
  console.log('idle client error', err.message, err.stack);
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
  end: () => {
    return pool.end().then(() => console.log('db connection closed'));
  },
};
