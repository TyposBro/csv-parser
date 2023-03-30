import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    // user_id::gender::age::occupation::zip_code
    id: {
      type: Number,
    },

    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    occupation: {
      type: String,
    },
    zip_code: {
      type: String,
    },
  },
  { _id: false }
);

export default mongoose.model("user", schema);
