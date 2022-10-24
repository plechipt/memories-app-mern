import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    // Get token from header
    const token = req.headers.authorization.split(" ")[1];

    let decodedData;

    console.log(token);

    // Verify token
    if (token) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedData?.user.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (err) {
    console.error("Something wrong with auth middleware");
    res.status(500).json({ message: "Server Error" });
  }
};
