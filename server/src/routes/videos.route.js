const {
  getVideos,
  getVideo,
  getRelatedVideos,
  postVideo,
} = require("../controllers/videos.controller");

const router = require("express").Router();

router.post("/", postVideo);
router.get("/:id/:title", getRelatedVideos);
router.get("/:id", getVideo);
router.get("/", getVideos);

module.exports = router;
