import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  genre: {
    type: Array,
  },
});

export default mongoose.model("userModel", userSchema);
