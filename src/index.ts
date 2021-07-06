const dotenv = require("dotenv").config();
import fastify from "./app";
import { ENV } from "./services/env";
import { recurrentFetchServer } from "./services/languages";
console.log(ENV);

/**
 * Initial setup fetch from locize. Set the refresh rate at 1h.
 */
recurrentFetchServer();
if (ENV.SELF_UPDATE) setInterval(() => recurrentFetchServer(), 3600000);

fastify.listen(process.env.PORT, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
