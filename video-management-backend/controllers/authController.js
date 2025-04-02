const User = require("../models/User");

// Get user profile (Protected Route)
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); // Password hide karna hai
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getUserProfile };
