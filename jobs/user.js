import { UserModel } from "../models/index.js";
import { parse } from "csv-parse";
import { readFile } from "fs";

const user_record = [];

const updateDB = () =>
  UserModel.insertMany(user_record)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

const convertAndInsert = (item) =>
  // UserID::Gender::Age::Occupation::Zip-code
  console.log(
    `id: ${item[0]} gender: ${item[1]} age: ${item[2]} job: ${item[3]} zip: ${item[4]}`
  ) ||
  user_record.push({
    id: item[0],
    gender: item[1],
    age: item[2],
    occupation: item[3],
    zip_code: item[4],
  });

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
