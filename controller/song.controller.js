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
}

export default SongController;
