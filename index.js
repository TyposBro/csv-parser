import express from "express";

import mongoose from "mongoose";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

import Movie from "./models/movie.js";
import assert from "assert";
import { parse } from "csv-parse";
import { readFile } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const movie_path = join(__dirname, "static", "foo.csv");
const user_path = join(__dirname, "static", "users.csv");
const rating_path = join(__dirname, "static", "ratings.csv");

const records = [];
// Initialize the parser
const parser = parse({
  delimiter: "::",
});

parser.on("readable", function () {
  let record;
  while ((record = parser.read()) !== null) {
    records.push(record);
  }
});

// Catch any error
parser.on("error", function (err) {
  console.error(err.message);
});

readFile(movie_path, function (err, fileData) {
  parse(fileData, { columns: false, trim: true }, function (err, rows) {
    // Your CSV data is in an array of arrys passed to this callback as rows.
    console.log(rows);
  });
});
const app = express();

const port = process.env.PORT || 5555;

mongoose
  .connect(
    "mongodb+srv://ju5tACoder:DB23072014@cluster0.xobbz.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.use(express.static(resolve(__dirname, "static")));

let empResponse;
// app.post("/", (req, res) => {
//   csv()
//     .fromFile(req.file.path)
//     .then((response) => {
//       for (let i = 0; i < response; i++) {
//         empResponse = parseFloat(response[i].Name);
//         response[i].Name = empResponse;
//         empResponse = parseFloat(response[i].Email);
//         response[i].Email = empResponse;
//         empResponse = parseFloat(response[i].Designation);
//         response[i].Designation = empResponse;
//         empResponse = parseFloat(response[i].Mobile);
//         response[i].Mobile = empResponse;
//       }
//       empSchema.insertMany(response, (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.redirect("/");
//         }
//       });
//     });
// });

parser.end();
app.listen(port, () => console.log("App connected on: " + port));
