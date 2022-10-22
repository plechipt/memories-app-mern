import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.headers.authorization.split(" ")[1];

  // Check if no token
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Verify token
  try {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: "Token is not valid" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error("Something wrong with auth middleware");
    res.status(500).json({ message: "Server Error" });
  }
};