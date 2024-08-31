const VideoModel = require("../models/video.model");

const getVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await VideoModel.find({ _id: id });
    res.status(200).json({
      status: "success",
      data: video,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error?.message,
    });
  }
};
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

module.exports = { getVideos, getVideo };
