require('dotenv').config();
const { Pool } = require("pg");

//for connection to online server
module.exports = new  Pool({
   connectionString: `${process.env.DB_URL}`,
});

//for connection to local server
// module.exports = new Pool({
//  host: process.env.DB_HOST, 
//   user: process.env.DB_USER,  
//   database: process.env.DB_NAME,  
//   password: process.env.DB_PASSWORD,  
//   port: process.env.DB_PORT || 5432, 
// });