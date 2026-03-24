const db = require("../db/queries");
const sanitizeHtml = require('sanitize-html');

async function getGamenames(req, res) {
  const searchQuery = req.query.search || '';
  const games = await db.getAllGamenames(searchQuery);
  console.log("Sendernames: ", games);
  res.render('index', { title: 'Game Zone', games});
}
async function createGamenameGet(req, res) {
res.render('form.ejs', { errors: [] });
}

async function createGamenamePost(req, res) {
  let { name,genre,developer} = req.body;
  
   // Sanitize the inputs to prevent XSS attacks
  name = sanitizeHtml(name);
  genre = sanitizeHtml(genre);
  developer = sanitizeHtml(developer);
  const errors = [];
  
  
  if (!name || name.trim().length === 0) {
    errors.push("Game name is required and cannot be empty.");
  }
  if (!genre || genre.trim().length === 0) {
    errors.push("Game genre is required and cannot be empty.");
  }
  if (!developer || developer.trim().length === 0) {
    errors.push("developer name is required and cannot be empty.");
  }


  // If there are errors, return to the form with the error messages
  if (errors.length > 0) {
    res.render('form.ejs', { errors });
    return;
  }

  // Proceed with inserting into the database if no errors
  try {
    await db.insertGamename(name,genre,developer);
    res.redirect("/");
  } catch (error) {
    console.error("Error inserting message:", error);
    res.status(500).json({ message: "Error posting message" });
  }
}

async function deleteAllGames(req, res) {
  await db.deleteAllGames();  // Assuming this function exists in your db queries
  res.send('All Games deleted successfully' );
}
async function getNamesPage(req, res) {
  try {
    const allGames = await db.getAllGamenames();
    // Only keep the name for display
    const games = allGames.map(game => ({ id: game.id,name: game.name }));
    res.render('name', { title: 'Game Zone', games });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading names');
  }
}
async function getGenresPage(req, res) {
  try {
    const allGames = await db.getAllGamenames();
    
     const uniqueGenres = [...new Set(allGames.map(game => game.genre))];

    const games = uniqueGenres.map(genre => ({ genre }));
    res.render('genre', { title: 'Game Zone', games });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading genres');
  }
}

async function getDevelopersPage(req, res) {
  try {
    const allGames = await db.getAllGamenames();
     const uniqueDev = [...new Set(allGames.map(game => game.developer))];
    const games = uniqueDev.map(developer => ({ developer }));
    res.render('developer', { title: 'Game Zone', games });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading developers');
  }
}
module.exports = {
  getNamesPage,
  getGenresPage,
  getDevelopersPage,
  getGamenames,
  createGamenameGet,
  createGamenamePost,
  deleteAllGames
};
