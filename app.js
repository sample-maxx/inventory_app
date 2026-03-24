const express = require("express");
const app = express();
const path = require("node:path");
const userRouter = require("./routes/userRouter");
const pool = require('./db/pool');
require('./db/populatedb.js');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.get("/new",(req, res) => {
  res.render("form");
});
app.post("/new",async (req, res) => {
  const { name,genre,developer} = req.body;
  
  try {
    await pool.query("INSERT INTO games (name,genre,developer) VALUES ($1, $2)", [name,genre,developer]);
    res.redirect("/");
  } catch (error) {
    console.error("Error inserting game:", error);
    res.status(500).json({ message: "Error posting game" });
  }
});
app.get('/delete', async (req, res) => {
  try {
    // SQL query to delete all rows in the users table
    await pool.query('DELETE FROM games');
    
    res.json({ message: 'All games deleted successfully' });
  } catch (error) {
    console.error('Error deleting games:', error);
    res.status(500).json({ message: 'Error deleting messages' });
  }
});
app.delete('/delete/:id', async (req, res) => {
  try {
    const gameId = req.params.id;
    await pool.query('DELETE FROM games WHERE id = $1', [gameId]);
    res.status(200).json({ message: 'Game deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting game' });
  }
});
app.delete('/delete/genre/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;

    // Delete all games where genre matches
    const result = await pool.query('DELETE FROM games WHERE genre = $1 RETURNING *', [genre]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'No games found for this genre' });
    }

    res.status(200).json({ message: `Deleted ${result.rowCount} game(s) in genre "${genre}"` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting games' });
  }
});
app.delete('/delete/developer/:developer', async (req, res) => {
  try {
    const developer = req.params.developer;

    // Delete all games where developer matches
    const result = await pool.query('DELETE FROM games WHERE developer = $1 RETURNING *', [developer]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'No games found for this developer' });
    }

    res.status(200).json({ message: `Deleted ${result.rowCount} game(s) for developer "${developer}"` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting games' });
  }
});
app.put('/games/:id', async (req, res) => {
  try {
    const gameId = req.params.id;
    const { name, genre, developer } = req.body;

    if (!name || !genre || !developer) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const result = await pool.query(
      'UPDATE games SET name = $1, genre = $2, developer = $3 WHERE id = $4',
      [name, genre, developer, gameId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Game not found' });
    }

    res.status(200).json({ message: 'Game updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating game' });
  }
});
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
