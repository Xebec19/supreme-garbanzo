import express from "express";
import cors from "cors";

import monthDetails from "./calender-config.js";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const month = (req.query.month || 12) - 1;
  const year = req.query.year || 2021;
  const { startDay, noOfDays } = monthDetails(month, year);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (month > 11 || month < 0 || year < 2000 || year > 2099) res.json("error");
  else res.render("index", { month, year, startDay, noOfDays, days });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
