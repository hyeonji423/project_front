const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USERNAVER_CLIENT_ID,
  password: process.env.NAVER_CLIENT_SECRET,
});

module.exports = { pool };
