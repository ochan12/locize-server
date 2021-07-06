import {
  FastifyInstance,
  FastifyPluginOptions,
  RequestGenericInterface,
} from "fastify";
import { getKey, setKey } from "../services/cache/cache";

interface CacheParams extends RequestGenericInterface {
  Body: {};
  Params: {
    key: string;
  };
  QueryString: {};
  Headers: {};
}

export async function cacheRoutes(
  fastify: FastifyInstance,
  fastifyOptions: FastifyPluginOptions
) {
  /**
   * Basic endpoint to fetch and set specific language
   */
  fastify.get<CacheParams>("/cache/:key", async (request, reply) => {
    const { key } = request.params;
    const value = await getKey(key, false);
    reply.code(200).send(value);
  });
  fastify.post<CacheParams>("/cache/:key", async (request, reply) => {
    const { key } = request.params;
    await setKey(key, request.body)
    const newValue = await getKey(key, false);
    reply.code(200).send(newValue);
  });
}
