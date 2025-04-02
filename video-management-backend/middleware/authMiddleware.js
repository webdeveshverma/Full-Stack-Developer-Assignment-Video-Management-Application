const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    try {
      token = token.split(" ")[1]; // Remove "Bearer "
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attach user data to request
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token, authorization denied" });
    }
  } else {
    res.status(401).json({ message: "No token provided, authorization denied" });
  }
};

module.exports = protect;
