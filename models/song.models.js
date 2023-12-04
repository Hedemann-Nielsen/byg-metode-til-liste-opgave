import db from "../config/db.config.js";

class SongModel {
	constructor() {}

	list = (req, res) => {
		return new Promise((resolve, reject) => {
			const orberBy = req.query.orderBy || "s.id";
			const dir = req.query.dir || "ASC";
			const limit = req.query.limit ? `LIMIT ${req.query.limit}` : "";
			const sql = `   SELECT s.id, s.title, a.name AS artist
                            FROM song s
                            JOIN artist a
                            ON s.artist_id = a.id
                            ORDER BY ${orberBy} ${dir} ${limit}`;
			db.query(sql, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	};

	get = (req, res) => {
		return new Promise((resolve, reject) => {
			const sql = `   SELECT s.id, s.title, s.content, s.artist_id, 
                            a.name AS artist, s.created
                            FROM song s
                            JOIN artist a
                            ON s.artist_id = a.id
                            WHERE s.id = ?`;
			db.query(sql, [req.params.id], (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(...result);
				}
			});
		});
	};

	create = (req, res) => {
		return new Promise((resolve, reject) => {
			const arrValues = Object.values(req.body);
			const sql = `   INSERT INTO song(title, content, artist_id)
                            VALUES(?,?,?)`;
			db.query(sql, arrValues, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({ status: true, id: result.insertId });
				}
			});
		});
	};

	update = (req, res) => {
		return new Promise((resolve, reject) => {
			const arrValues = Object.values(req.body);
			const sql = `   UPDATE song 
                            SET title = ?,
                            content = ?,
                            artist_id = ?
                            WHERE id = ?`;
			db.query(sql, arrValues, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({ status: true, id: req.body.id });
				}
			});
		});
	};

	delete = (req, res) => {
		return new Promise((resolve, reject) => {
			const sql = `   DELETE FROM song 
                            WHERE id = ?`;
			db.query(sql, [req.params.id], (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({ status: true });
				}
			});
		});
	};

	//Users

	UserList = (req, res) => {
		return new Promise((resolve, reject) => {
			const orberBy = req.query.orderBy || "Firstname";
			// const dir = req.query.dir || "ASC";
			// const limit = req.query.limit ? `LIMIT ${req.query.limit}` : "";
			const sql = `   SELECT * from user
                            ORDER BY ${orberBy} `;
			db.query(sql, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	};
	user = (req, res) => {
		return new Promise((resolve, reject) => {
			const sql = `   SELECT * from user 
                            WHERE id = ?`;
			db.query(sql, [req.params.id], (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(...result);
				}
			});
		});
	};
	createUser = (req, res) => {
		return new Promise((resolve, reject) => {
			const arrValues = Object.values(req.body);
			const sql = `   INSERT INTO user(Firstname, Lastname, Username, Password, Email, Birthday, Gender)
                            VALUES(?,?,?,?,?,?,? )`;
			db.query(sql, arrValues, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({ status: true, id: result.insertId });
				}
			});
		});
	};
	updateUser = (req, res) => {
		return new Promise((resolve, reject) => {
			const arrValues = Object.values(req.body);
			const sql = `   UPDATE user 
                            SET Firstname = ?,
                            Lastname = ?,
                            Username = ?,
                            Password = ?,
                            Email = ?,
                            Birthday = ?
                            WHERE id = ?`;
			db.query(sql, arrValues, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({ status: true, id: req.body.id });
				}
			});
		});
	};

	deleteUser = (req, res) => {
		return new Promise((resolve, reject) => {
			const sql = `   DELETE FROM user 
                            WHERE id = ?`;
			db.query(sql, [req.params.id], (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({ status: true });
				}
			});
		});
	};
}

export default SongModel;
