import {
  FastifyInstance,
  FastifyPluginOptions,
  RequestGenericInterface,
} from "fastify";
import { getCurrentLanguage } from "../services/languages";
import { ApplanguageCode } from "../types";

interface GetLanguageParams extends RequestGenericInterface {
  Body: {};
  Params: {
    language: ApplanguageCode;
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
  fastify.get<GetLanguageParams>(
    "/language/:language",
    async (request, reply) => {
      let language = await getCurrentLanguage(request.params.language);
      reply.code(200).send(language)
    }
  );

  /**
   * Refetch locize
   */
  fastify.post("/refresh/:language", function (request, reply) {});
}
