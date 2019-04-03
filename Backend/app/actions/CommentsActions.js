const Comments = require("../models/CommentsModel");


const createComments = (data) => {
	return Comments.create(data);
};

module.exports= {
    createComments
}
