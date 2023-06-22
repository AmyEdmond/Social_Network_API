const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts GET and POST
router.route("/").get(getThoughts).post(createThought);
// /api/thoughts/:id GET, PUT, DELETE
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
// /api/thoughts/:thoughtId/reactions POST
router.route("/:thoughtId/reactions").post(createReaction);
// /api/thoughts/:thoughtId/reactions/:reactionId DELETE
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
