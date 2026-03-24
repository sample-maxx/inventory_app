const pool = require("./pool");

async function getAllGamenames(searchQuery = "") {
  if(searchQuery==""){
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
  }else{
   const result = await pool.query(
    "SELECT name FROM games WHERE name ILIKE $1", 
    [`%${searchQuery}%`]  // % is a wildcard for the LIKE operator
  );
  return result.rows;
}
}

async function insertGamename(name,genre,developer) {
  await pool.query("INSERT INTO games (name,genre,developer) VALUES ($1,$2,$3)", [name,genre,developer]);
}
async function deleteAllGames(){
  await pool.query("DELETE FROM games");
}
module.exports = {
  getAllGamenames,
  insertGamename,
  deleteAllGames,
};
