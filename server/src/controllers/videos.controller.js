const VideoModel = require("../models/video.model");

const getVideos = async (_req, res) => {
  try {
    const videos = await VideoModel.find({});
    res.status(200).json({
      status: "success",
      data: videos,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error?.message,
    });
  }
};

module.exports = { getVideos };
