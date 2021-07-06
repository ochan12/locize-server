import {
  FastifyInstance,
  FastifyPluginOptions,
  RequestGenericInterface,
} from "fastify";
import { getKey, getLocizeLanguage, setKey } from "../services";
import { getCurrentLanguage } from "../services/languages";
import { ApplanguageCode } from "../types";

interface GetLanguageParams extends RequestGenericInterface {
  Body: {};
  Params: {
    language: ApplanguageCode;
  };
  Querystring: {
    version?: string;
    namespace?: string;
  };
  Query: {
    version?: string;
    namespace?: string;
  };
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
      const { version, namespace } = request.query;
      let language = await getCurrentLanguage(
        request.params.language,
        version,
        namespace
      );
      reply.code(200).send(language);
    }
  );

  /**
   * Refetch locize
   */
  fastify.post<GetLanguageParams>(
    "/refresh/:language",
    async (request, reply) => {
      const { version, namespace } = request.query;
      const { language } = request.params;
      const newKey = await getKey(language, true, () =>
        getLocizeLanguage(language, version, namespace)
      );
      return newKey;
    }
  );
}
