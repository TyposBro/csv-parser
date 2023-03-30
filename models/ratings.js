import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
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

export default mongoose.model("ratingModel", ratingSchema);
