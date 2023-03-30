import mongoose from "mongoose";

const schema = new mongoose.Schema({
  // user_id::movie_id::rating::timestamp

  user_id: {
    type: Number,
  },
  movie_id: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  timestamp: {
    type: Number,
  },
});

export default mongoose.model("rating", schema);
