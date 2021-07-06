import app from "../app";
import { test } from "tap";
import data from "./data";

test("Redis app", async (t) => {
  await app.inject({ method: "POST", url: "/cache/en", payload: data });
  const counter = [];
  const num = 5
  for (let i = 0; i < num; i++) {
    let date = new Date().getTime();
    await app.inject({ method: "GET", url: "/language/en" });
    counter.push(new Date().getTime() - date);
  }
  let sum = counter.reduce((prev, act) => prev + act, 0)
  console.log("Average time", sum/num);

  t.equal(true, sum/num < 20, "Average time per request under 20ms" )
});
