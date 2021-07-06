import { test } from "tap";
import app from "../app";
const dotenv = require("dotenv").config();

test("UNIT TEST ROUTES", async (t) => {
  let response = await app.inject({
    method: "GET",
    url: "/",
  });
  t.equal(response.statusCode, 200, " -> Root route");

  response = await app.inject({
    method: "GET",
    url: "/swagger",
  });
  t.equal(response.statusCode, 200, " -> swagger route");

  response = await app.inject({
    method: "POST",
    url: "/cache/test",
    payload: { test: "goodbye world" },
  });
  t.has(JSON.parse(response.body), { test: "goodbye world" }, " -> set cache");

  response = await app.inject({
    method: "GET",
    url: "/cache/test",
  });
  t.has(JSON.parse(response.body), { test: "goodbye world" }, " -> get cache");

  response = await app.inject({
    method: "get",
    url: "/language/test",
  });
  t.has(JSON.parse(response.body), { test: "goodbye world" }, " -> get language");
});
