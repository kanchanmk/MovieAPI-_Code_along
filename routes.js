"use strict";

const express = require("express");
const routes = express.Router();

const movies = [
	{ id: 1, title: "Toy Story", year: 1995, animated: true },
	{ id: 2, title: "Forrest Gump", year: 1994, animated: false },
];
let nextId = 3;
// GET /movies - respond with JSON array of movies
routes.get("/movies", (req, res) => {
	res.json(movies);
});

routes.get("/movies/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const movie = movies.find((movie) => movie.id === id);
	if (movie) {
		res.json(movie);
	} else {
		res.status(404);
		res.send(`No movie with id ${id} exists`);
	}

	res.json(movie);
});

routes.post("/movies", (req, res) => {
	const movie = req.body;
	movie.id = nextId++;
	movies.push(movie);

	res.status(201);
	res.json(movie);
});

// routes.put("movies/:id", (req,res)=> {

// })

routes.delete("/movies/:id", (req, res) => {
	const id = parseInt(req.params.id);

	const index = movies.findIndex((movie) => movie.id === id);
	if (index != -1) {
		movies.slice(id);
	}

	res.status(204);
	res.send();
});

// export routes for use in server.js
module.exports = routes;
