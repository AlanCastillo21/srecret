const User = require("../models/UserModel");


const createUser = (data) => {
	return User.create(data);
};
const getUserByCorreo = (correo) => {
	return User.findOne({correo: correo})
};
const getUserById = (id) => {
	return User.findOne({_id: id}.select("-password"))
};

const deleteUserById =  (id)  => {
	return User.findByIdAndUpdate({_id: id,is_active:true},{$set:{is_active:false}},{new:true});
};

module.exports= {
    createUser,
    getUserByCorreo,
    getUserById,
    deleteUserById
}
