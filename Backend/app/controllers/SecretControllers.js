const {
	createSecret
} = require("../actions");

const createSecrets = (req, res) => {
	//req.body.user_id = req.user._id;
	req.body.user_id = "jhjhj"
	createSecret(req.body).then((secret) => {
    res.status(201).json(secret)
	}).catch(e => res.status(400).json(e));
};

const deleteSecret = (id) => {
	return secret.findByIdAndUpdate({ _id: id, is_active: true }, { $set: { is_active: false } }, { new: true });
};

module.exports = {
    createSecrets,
    deleteSecret,

};

