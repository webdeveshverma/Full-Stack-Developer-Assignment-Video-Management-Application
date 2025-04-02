const Video = require("../models/Video");

// ✅ Upload Video Function
const uploadVideo = async (req, res) => {
  console.log("🔥 Upload Video Controller Loaded");

  try {
    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "❌ No video file uploaded!" });
    }

    // Check if user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: "❌ Not authorized, user not found!" });
    }

    // Destructure and provide default values for title, description, and tags
    const { title = "Untitled Video", description = "No description", tags = "" } = req.body;
    const tagsArray = tags.split(",").map(tag => tag.trim());

    // Create new video instance
    const newVideo = new Video({
      user: req.user.id, // Ensure user is authenticated and req.user.id exists
      title,
      description,
      videoUrl: `/uploads/${req.file.filename}`, // Make sure the file is saved in uploads folder
      fileSize: req.file.size,
      tags: tagsArray,
    });

    // Save the video
    await newVideo.save();

    res.status(201).json({
      message: "✅ Video uploaded successfully!",
      video: newVideo,
    });
  } catch (error) {
    console.error("❌ Upload Error:", error.message);
    res.status(500).json({ message: "❌ Server error", error: error.message });
  }
};

// ✅ Get All Videos Function (with pagination and search)
const getVideos = async (req, res) => {
    try {
        const { page = 1, limit = 3, search = '' } = req.query;

        // ✅ Ensure user is authenticated
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized! Please log in." });
        }

        // ✅ Fetch only the logged-in user's videos
        const videos = await Video.find({ 
            user: req.user.id, 
            title: { $regex: search, $options: 'i' } 
        })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 });

        const totalVideos = await Video.countDocuments({ 
            user: req.user.id, 
            title: { $regex: search, $options: 'i' } 
        });

        res.json({
            videos,
            totalVideos,
            pages: Math.ceil(totalVideos / limit),
            currentPage: page,
        });
    } catch (error) {
        console.error("❌ Error fetching videos:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { uploadVideo, getVideos };
