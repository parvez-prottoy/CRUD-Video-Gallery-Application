const {
  getVideos,
  getVideo,
  getRelatedVideos,
  postVideo,
  deleteVideo,
  patchVideo,
} = require("../controllers/videos.controller");

const router = require("express").Router();

router.patch("/:id", patchVideo);
router.delete("/:id", deleteVideo);
router.post("/", postVideo);
router.get("/:id/:title", getRelatedVideos);
router.get("/:id", getVideo);
router.get("/", getVideos);

module.exports = router;
