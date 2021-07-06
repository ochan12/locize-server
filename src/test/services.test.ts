import { test } from "tap";
import { fetchLanguages, getCurrentLanguage, getKey, setKey } from "../services";
const dotenv = require("dotenv").config();

test("UNIT TEST SERVICES", async (t) => {
  await setKey("test", { test: "Hello world" });
  let response = await getKey("test");
  t.has(response, { test: "Hello world" }, " -> create cache key");

  await setKey("test", { test: "Goodbye world" });
  response = await getKey("test");
  t.has(response, { test: "Goodbye world" }, " -> edit cache key");

  response = await getCurrentLanguage("en");
  t.ok(response, "- -> Ok response of fetching server");
  t.type(response, "object", " -> type fetching server");

  response = await fetchLanguages();
  t.match(response.length, /[0-9]*/, " -> Fetch locize languages");
});
