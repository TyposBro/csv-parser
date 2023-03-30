import mongoose from "mongoose";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
dotenv.config();

import { movieJob, userJob, ratingJob } from "./jobs/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const movie_path = join(__dirname, "static", "movie.csv");
const user_path = join(__dirname, "static", "user.csv");
const rating_path = join(__dirname, "static", "rating.csv");

movieJob(movie_path, "::");
userJob(user_path, "::");
ratingJob(rating_path, "::");
console.log(process.env);
mongoose
  .connect(
    `mongodb+srv://${process.env.LOGIN}:${process.env.FOO}@cluster0.xobbz.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
