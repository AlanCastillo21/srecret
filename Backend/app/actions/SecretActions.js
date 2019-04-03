const Secret = require("../models/SecretModel");


const createSecret = (data) => {
	return Secret.create(data);
};
const deleteSecret = (id) => {
	return Post.findByIdAndUpdate({ _id: id, is_active: true }, { $set: { is_active: false } }, { new: true });
};


module.exports= {
    createSecret,
    deleteSecret
}
