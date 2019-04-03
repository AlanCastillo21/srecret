
const {getUserById,deleteUserById}= require("../models/UserModel");

const getUser = (req, res) => {

	getUserById(req.params.id).then((user) => {
		if (!user) res.status(404).json({ "message": "User does not exist" });
		res.status(200).json(user);
	}).catch((e) => {
		res.status(400).json(e);
	});

};
const deleteUser = (req, res) => {
	deleteUserById(req.params.id).then((user) => {
		if (!user) res.status(404).json({ "message": "User does not exist" });
		res.status(200).json({ "message": "User deleted seccessfully" });
	}).catch((e) => {
		res.status(400).json(e);
	});
};





module.exports = {
    getUser,
    deleteUser
};