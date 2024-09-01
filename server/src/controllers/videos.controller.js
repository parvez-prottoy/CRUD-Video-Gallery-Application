const VideoModel = require("../models/video.model");

const patchVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      author,
      image,
      date,
      duration,
      views,
      link,
      thumbnail,
    } = req.body;
    const updateVideo = await VideoModel.findOne({ _id: id });
    updateVideo.title = title;
    updateVideo.description = description;
    updateVideo.author = author;
    updateVideo.image = image;
    updateVideo.date = date;
    updateVideo.duration = duration;
    updateVideo.views = views;
    updateVideo.link = link;
    updateVideo.thumbnail = thumbnail;
    await updateVideo.save();
    res.status(200).json({
      status: "success",
      data: updateVideo,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error?.message,
    });
  }
};
const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideo = await VideoModel.deleteOne({ _id: id });
    res.status(200).json({
      status: "success",
      deleteId: id,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error?.message,
    });
  }
};
const postVideo = async (req, res) => {
  try {
    const data = req.body || {};
    const video = await VideoModel.create(data);
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
const getRelatedVideos = async (req, res) => {
  try {
    const { id, title } = req.params;
    console.log(title);
    const keywords = title.toLowerCase().split(/[\s,]+/);
    const relatedVideos = await VideoModel.find({
      _id: { $ne: id },
      title: { $regex: keywords.join("|"), $options: "i" },
    }).limit(4);
    res.status(200).json({
      status: "success",
      data: relatedVideos,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error?.message,
    });
  }
};
const getVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await VideoModel.findOne({ _id: id });
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

module.exports = {
  getVideos,
  getVideo,
  getRelatedVideos,
  postVideo,
  deleteVideo,
  patchVideo,
};
