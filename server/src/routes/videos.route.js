const {
  getVideos,
  getVideo,
  getRelatedVideos,
} = require("../controllers/videos.controller");

const router = require("express").Router();

router.get("/:id/:title", getRelatedVideos);
router.get("/:id", getVideo);
router.get("/", getVideos);

module.exports = router;
