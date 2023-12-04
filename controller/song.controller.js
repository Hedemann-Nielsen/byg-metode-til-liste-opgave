import SongModel from "../models/song.models.js";

const model = new SongModel();

// Controller
class SongController {
	constructor() {}

	list = async (req, res) => {
		const result = await model.list(req, res);
		res.json(result);
	};

	get = async (req, res) => {
		const result = await model.get(req, res);
		res.json(result);
	};
	create = async (req, res) => {
		const result = await model.create(req, res);
		res.json(result);
	};
	update = async (req, res) => {
		const result = await model.update(req, res);
		res.json(result);
	};
	delete = async (req, res) => {
		const result = await model.delete(req, res);
		res.json(result);
	};

	//users
	UserList = async (req, res) => {
		const result = await model.UserList(req, res);
		res.json(result);
	};

	get = async (req, res) => {
		const result = await model.user(req, res);
		res.json(result);
	};
	createUser = async (req, res) => {
		const result = await model.createUser(req, res);
		res.json(result);
	};
	updateUser = async (req, res) => {
		const result = await model.updateUser(req, res);
		res.json(result);
	};
	deleteUser = async (req, res) => {
		const result = await model.deleteUser(req, res);
		res.json(result);
	};
}

export default SongController;
