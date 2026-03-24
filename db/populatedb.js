#! /usr/bin/env node
require('dotenv').config();
const pool = require('./pool');
const SQL = `
CREATE TABLE IF NOT EXISTS games (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   name VARCHAR ( 255 ) UNIQUE,
   genre VARCHAR ( 255 ) ,
   developer VARCHAR ( 255 )
);
INSERT INTO games (name, genre, developer)
SELECT 'World conqueror 3','strategy','Easytech'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='World conqueror 3');

INSERT INTO games (name, genre, developer)
SELECT 'Clash of Clans','strategy','Supercell'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Clash of Clans');

INSERT INTO games (name, genre, developer)
SELECT 'Minecraft','sandbox','Mojang'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Minecraft');

INSERT INTO games (name, genre, developer)
SELECT 'Fortnite','battle royale','Epic Games'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Fortnite');

INSERT INTO games (name, genre, developer)
SELECT 'Among Us','party','InnerSloth'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Among Us');

INSERT INTO games (name, genre, developer)
SELECT 'PUBG','battle royale','PUBG Corporation'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='PUBG');

INSERT INTO games (name, genre, developer)
SELECT 'League of Legends','MOBA','Riot Games'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='League of Legends');

INSERT INTO games (name, genre, developer)
SELECT 'Valorant','FPS','Riot Games'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Valorant');

INSERT INTO games (name, genre, developer)
SELECT 'Genshin Impact','RPG','miHoYo'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Genshin Impact');

INSERT INTO games (name, genre, developer)
SELECT 'Call of Duty: Warzone','FPS','Infinity Ward'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Call of Duty: Warzone');

INSERT INTO games (name, genre, developer)
SELECT 'Candy Crush Saga','puzzle','King'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Candy Crush Saga');

INSERT INTO games (name, genre, developer)
SELECT 'The Sims 4','simulation','Maxis'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='The Sims 4');

INSERT INTO games (name, genre, developer)
SELECT 'FIFA 23','sports','EA Sports'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='FIFA 23');

INSERT INTO games (name, genre, developer)
SELECT 'Apex Legends','battle royale','Respawn Entertainment'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Apex Legends');

INSERT INTO games (name, genre, developer)
SELECT 'Roblox','sandbox','Roblox Corporation'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Roblox');

INSERT INTO games (name, genre, developer)
SELECT 'Clash Royale','strategy','Supercell'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Clash Royale');

INSERT INTO games (name, genre, developer)
SELECT 'Terraria','sandbox','Re-Logic'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Terraria');

INSERT INTO games (name, genre, developer)
SELECT 'Pokémon Go','AR','Niantic'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Pokémon Go');

INSERT INTO games (name, genre, developer)
SELECT 'Dota 2','MOBA','Valve'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Dota 2');

INSERT INTO games (name, genre, developer)
SELECT 'Overwatch','FPS','Blizzard Entertainment'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Overwatch');

INSERT INTO games (name, genre, developer)
SELECT 'Animal Crossing: New Horizons','simulation','Nintendo'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Animal Crossing: New Horizons');

INSERT INTO games (name, genre, developer)
SELECT 'Rocket League','sports','Psyonix'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Rocket League');

INSERT INTO games (name, genre, developer)
SELECT 'Subway Surfers','endless runner','Kiloo'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Subway Surfers');

INSERT INTO games (name, genre, developer)
SELECT 'Candy Crush Soda Saga','puzzle','King'
WHERE NOT EXISTS (SELECT 1 FROM games WHERE name='Candy Crush Soda Saga');
`;

async function main() {
   try {
    await pool.query(SQL);
    console.log("done");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

main();
