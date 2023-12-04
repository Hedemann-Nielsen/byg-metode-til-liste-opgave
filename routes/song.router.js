import express from "express";
import SongController from "../controller/song.controller.js";

const router = express.Router();

// Kalder instans af klassen SongController
const controller = new SongController();

router.get("/api/song", (req, res) => {
	controller.list(req, res);
});
router.get("/api/song/:id([0-9]*)", (req, res) => {
	controller.get(req, res);
});

export { router };
