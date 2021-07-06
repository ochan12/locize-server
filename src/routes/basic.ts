import {
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify";
const swagger = require("../swagger.json");

export async function basicRoutes(
  fastify: FastifyInstance,
  fastifyOptions: FastifyPluginOptions
) {
  fastify.get("/",async (request, reply) => {
    reply.code(200).send({ service: "locize-server" });
  });
  fastify.get("/swagger", async (request, reply) => {
    reply.code(200).send(swagger)
  });
}
