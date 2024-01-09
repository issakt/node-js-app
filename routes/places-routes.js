const express = require("express");

const placesActions = require("../Action/places-action");

const routes = express.Router();

routes.get("/place/:pid", placesActions.getPlaceById);

routes.get("/user/:uid", placesActions.getUserById);

routes.post("/signup", placesActions.signUp);

module.exports = routes;
