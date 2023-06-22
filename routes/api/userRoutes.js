const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/Users GET and POST
router.route("/").get(getUsers).post(createUser);
// /api/Users/:id GET, PUT, DELETE
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);
// /api/Users/:UserId/friends POST
router.route("/:userId/friends").post(createFriend);
// /api/Users/:UserId/friends/:friendId DELETE
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
