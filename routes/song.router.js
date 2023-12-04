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
router.post("/api/song", (req, res) => {
	controller.create(req, res);
});
router.put("/api/song", (req, res) => {
	controller.update(req, res);
});
router.delete("/api/song/:id([0-9]*)", (req, res) => {
	controller.delete(req, res);
});

export { router };
