// Require the framework and instantiate it
import { fastify as fastifyConstructor } from "fastify";

const fastify = fastifyConstructor({ logger: true });


/**
 * Hello world
 */
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});



// Run the server!
fastify.listen(process.env.PORT, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
