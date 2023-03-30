import { RatingModel } from "../models/index.js";
import { parse } from "csv-parse";
import { readFile } from "fs";

const _rating = [];

const updateDB = () =>
  RatingModel.insertMany(_rating)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

const convertAndInsert = (item) =>
  // UserID::MovieID::Rating::Timestamp
  _rating.push({ user_id: item[0], movie_id: item[1], rating: item[2], timestamp: item[3] });

const parser = (data, delimiter) =>
  parse(data, { columns: false, trim: true, delimiter })
    .on("data", convertAndInsert)
    .on("end", updateDB);

const ratingJob = (path, delimiter) =>
  readFile(path, function (err, data) {
    if (data) parser(data, delimiter);
    if (err) console.log(err);
  });

export default ratingJob;
