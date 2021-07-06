import {
  FastifyInstance,
  FastifyPluginOptions,
  RequestGenericInterface,
} from "fastify";
import { REPL_MODE_SLOPPY } from "repl";
import { getCurrentLanguage } from "../services/languages";
import { getLocizeLanguage } from "../services/locize";
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
    function (request, reply) {
      getCurrentLanguage(request.params.language).then((data) =>
        reply.code(200).send(data)
      );
    }
  );

  /**
   * Refetch locize
   */
  fastify.post("/refresh/:language", function (request, reply) {});
}
