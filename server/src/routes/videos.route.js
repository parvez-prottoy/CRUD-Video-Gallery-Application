const { getVideos, getVideo } = require("../controllers/videos.controller");

const router = require("express").Router();

router.get("/:id", getVideo);
router.get("/", getVideos);

module.exports = router;
