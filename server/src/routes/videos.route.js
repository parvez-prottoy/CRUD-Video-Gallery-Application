const { getVideos } = require("../controllers/videos.controller");

const router = require("express").Router();

router.get("/", getVideos);

module.exports = router;
