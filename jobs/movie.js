import { MovieModel } from "../models/index.js";
import { parse } from "csv-parse";
import { readFile } from "fs";

const movie_record = [];

const updateDB = () =>
  MovieModel.insertMany(movie_record)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

const convertAndInsert = (item) =>
  movie_record.push({ id: item[0], title: item[1], genre: item[2].split("|") });

const parser = (data, delimiter) =>
  parse(data, { columns: false, trim: true, delimiter })
    .on("data", convertAndInsert)
    .on("end", updateDB);

const movieJob = (path, delimiter) =>
  readFile(path, function (err, data) {
    if (data) parser(data, delimiter);
    if (err) console.log(err);
  });

export default movieJob;
