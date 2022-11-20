import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const postSchema = mongoose.Schema({
  title: String,
  text: String,
  creator: String,
  userId: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  comments: {
    text: String,
    userId: { type: ObjectId, ref: "user" },
    createdAt: { type: Date, default: new Date() },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
