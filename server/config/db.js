// config/db.js
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'system',
  database: 'atdriveApp',
  port: 3306,
});

module.exports = db;
