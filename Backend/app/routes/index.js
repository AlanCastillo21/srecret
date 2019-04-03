const express = require("express");
const {  getUser,  deleteUser} = require("../controllers/UserControllers");
const { createSecrets, deleteSecret } = require("../controllers/SecretControllers");
const { createComments,deleteComment} = require("../controllers/CommentsControllers");
const router = express.Router();

router.get("/users/:id",  getUser);
router.delete("/users/:id", deleteUser)

router.post("/secrets",  createSecrets);
router.delete("/secrets/:id",  deleteSecret);

router.post("/comments",  createComments);
router.delete("/comments/:id",  deleteComment);



module.exports = router;