require("dotenv").config("../.env");

const dev = {
  port: process.env.PORT || 8080,
  dbURL:
    process.env.MONGODB_URL ||
    "mongodb://localhost:27017/VideoGalleryApplication",
};

module.exports = dev;
