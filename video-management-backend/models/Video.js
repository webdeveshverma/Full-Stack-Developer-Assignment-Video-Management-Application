const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    fileSize: {
      type: Number,
    },
    tags: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);

