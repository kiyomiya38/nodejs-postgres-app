const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 8080;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  port: 5432,
  ssl: true 
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`DB connected: ${result.rows[0].now}`);
  } catch (err) {
    console.error('DB connection error:', err);
    res.status(500).send(`DB connection error: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
