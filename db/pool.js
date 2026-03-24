require('dotenv').config();
const { Pool } = require("pg");

//for connection to online server
module.exports = new  Pool({
   connectionString: `${process.env.DB_URL}`,
});