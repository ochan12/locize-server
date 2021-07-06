import app from "../app";
import data from "./data";
const dotenv = require("dotenv").config(".json.env");
import { test } from "tap";
test("JSON app", async (t) => {
  await app.inject({ method: "POST", url: "/cache/en", payload: data });
  const counter = [];
  const num = 5;
  for (let i = 0; i < num; i++) {
    let date = new Date().getTime();
    await app.inject({ method: "GET", url: "/cache/en" });
    counter.push(new Date().getTime() - date);
  }
  let sum = counter.reduce((prev, act) => prev + act, 0)
  console.log("Average time", sum/num);

  t.equal(true, sum/num < 10, "Average time per request under 20ms" )
});
