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
//users
router.get("/api/user", (req, res) => {
	controller.UserList(req, res);
});
router.get("/api/user/:id([0-9]*)", (req, res) => {
	controller.get(req, res);
});
router.post("/api/user", (req, res) => {
	controller.createUser(req, res);
});
router.put("/api/user", (req, res) => {
	controller.updateUser(req, res);
});
router.delete("/api/user/:id([0-9]*)", (req, res) => {
	controller.deleteUser(req, res);
});

// Slet bruger

export { router };
