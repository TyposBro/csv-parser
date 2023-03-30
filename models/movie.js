import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: {
    type: Number,
  },
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
  },
  title: {
    type: String,
  },
  genre: {
    type: Array,
  },
});

export default mongoose.model("movie", schema);
