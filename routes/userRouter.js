const { Router } = require("express");
const usersController = require("../controllers/userController");
const usersRouter = Router();

usersRouter.get("/", usersController.getGamenames);
usersRouter.get("/new",usersController.createGamenameGet);
usersRouter.post("/new",usersController.createGamenamePost);
usersRouter.get("/delete", usersController.deleteAllGames);
usersRouter.get("/name", usersController.getNamesPage);
usersRouter.get("/genre", usersController.getGenresPage);
usersRouter.get("/developer", usersController.getDevelopersPage);
module.exports = usersRouter;