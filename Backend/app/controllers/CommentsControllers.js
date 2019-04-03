const {
	createComment
} = require("../actions");

const createComments = (req, res) => {
	//req.body.user_id = req.user._id;
	req.body.user_id = "jhjhj"
	createComment(req.body).then((Comment) => {
    res.status(201).json(Comment)
	}).catch(e => res.status(400).json(e));
};

const deleteComment = (id) => {
	return Comment.findByIdAndUpdate({ _id: id, is_active: true }, { $set: { is_active: false } }, { new: true });
};

module.exports = {
    createComments,
    deleteComment,

};