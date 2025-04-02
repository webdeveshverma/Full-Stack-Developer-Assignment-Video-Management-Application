const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
//const { protect } = require("../middleware/authMiddleware");
const { uploadVideo, getVideos } = require("../controllers/videoController");
const protect = require("../middleware/authMiddleware");

console.log("🔥 Video Routes Loaded");

// ✅ Route for uploading video
router.post("/upload", protect, upload.single("video"), uploadVideo);

// ✅ Route for getting all videos (with pagination and search)
router.get('/', protect, getVideos);


module.exports = router;


