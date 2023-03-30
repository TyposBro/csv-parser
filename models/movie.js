import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
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

export default mongoose.model("movieModel", movieSchema);
