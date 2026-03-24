Game Management App

Game Management App is a web application that allows you to manage a list of games, including their name, genre, and developer. You can view all games, create new entries, update existing games, and delete them individually, by genre, or by developer. Built with Express.js, PostgreSQL, and EJS templating.

Table of Contents
Database Design
Installation
Running the App
Routes and Controllers
Views
CRUD Functionality
Dummy Data
Deployment
Database Design

The app has a single games table to store all games.

Table: games
Field	Type	Constraints
id	SERIAL	PRIMARY KEY
name	VARCHAR(255)	NOT NULL
genre	VARCHAR(255)	NOT NULL
developer	VARCHAR(255)	NOT NULL
Installation
Clone the repo:
git clone https://github.com/sample-maxx/inventory_app.git
cd inventory_app

Install dependencies:
npm install
Create .env file:
DB_URL="postgresql://postgres:OnfNUAuJBrJuPfUOmZPYdBQgfBVOiJvM@postgres.railway.internal:5432/railway"
PORT=3000
Create PostgreSQL database:
CREATE DATABASE games_db;
Run database setup and seed data (if you have a populatedb.js script):
node db/populatedb.js
Running the App
npm start

App link:https://inventoryapp-production-9f66.up.railway.app/

Routes and Controllers
Routes Overview
Method	Route	Description
GET	/	List all games
GET	/new	Show form to create a new game
POST	/new	Create a new game
GET	/delete	Delete all games
DELETE	/delete/:id	Delete a game by ID
DELETE	/delete/genre/:genre	Delete all games of a specific genre
DELETE	/delete/developer/:developer	Delete all games from a specific developer
PUT	/games/:id	Update a game by ID
GET	/name	View all game names
GET	/genre	View all genres
GET	/developer	View all developers

Controllers are located in controllers/userController.js.

Views

The app uses EJS templates. Key views:

views/form.ejs – Form for creating a new game
views/index.ejs – List all games
views/names.ejs – List of all game names
views/genres.ejs – List of all genres
views/developers.ejs – List of all developers
CRUD Functionality
Create: Add new games using the /new form.
Read: View all games on the homepage, or filter by name, genre, or developer.
Update: Update a game using the /games/:id route (PUT).
Delete:
Delete a single game (/delete/:id)
Delete all games (/delete)
Delete all games by genre or developer
Dummy Data

Example SQL seed data:

INSERT INTO games(name, genre, developer) VALUES
('The Legend of Zelda', 'Adventure', 'Nintendo'),
('Minecraft', 'Sandbox', 'Mojang'),
('Halo Infinite', 'Shooter', '343 Industries');

Deployment
Deploy PostgreSQL database on a cloud provider (Heroku, Railway, etc.).
Update DATABASE_URL in .env.
Deploy the app
Run populatedb.js to seed data if needed.