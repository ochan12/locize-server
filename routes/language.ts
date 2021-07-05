import { FastifyInstance, FastifyPluginOptions, RequestGenericInterface } from "fastify";
import { RouteGenericInterface } from "fastify/types/route";
import { buildLocizeURL } from "../services/locize";

interface GetLanguageParams extends RequestGenericInterface {
  Body: {};
  Params: {
    language: string
  };
  QueryString: {};
  Headers: {};
}

export async function languageRoutes(
  fastify: FastifyInstance,
  fastifyOptions: FastifyPluginOptions
) {
  /**
   * Basic endpoint to fetch specific language
   */
  fastify.get<GetLanguageParams>("/language/:language", function (request, reply) {
    return buildLocizeURL(request.params.language)
  });

  /**
   * Refetch locize
   */
  fastify.post("/refresh/:language", function (request, reply) {});
}
