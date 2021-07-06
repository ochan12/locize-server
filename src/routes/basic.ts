import {
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify";

export async function basicRoutes(
  fastify: FastifyInstance,
  fastifyOptions: FastifyPluginOptions
) {
  fastify.get("/", function (request, reply) {
    reply.send({ service: "locize-server" });
  });
  fastify.get("/swagger", function (request, reply) {});
}
