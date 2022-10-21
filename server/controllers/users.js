import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const authMiddleware = (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

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

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).json({ allUsers });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({
        statusCode: 400,
        errorType: 1,
        message: "This username already exists!",
      });
    }

    // Create new user
    user = new User({
      username,
      password,
    });

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Return jwt
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "7 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ statusCode: 200, token });
      }
    );
  } catch (err) {
    res.status(500).send("Server error");
  }
};

const loginErrorMessage = "Username or password is incorrect!";
const errorObject = { statusCode: 400, message: loginErrorMessage };

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json(errorObject);
    }

    // Check is the encrypted password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json(errorObject);
    }

    // Return jwt
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "30 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ statusCode: 200, token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const getInfo = async (req, res) => {
  const { _id } = req.body;

  try {
    const user = await User.findById(_id).select("-password");
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};
