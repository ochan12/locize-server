import {
  FastifyInstance,
  FastifyPluginOptions,
  RequestGenericInterface,
} from "fastify";
import { getKey, setKey } from "../services/cache";

interface CacheParams extends RequestGenericInterface {
  Body: {};
  Params: {
    key: string;
    method: "set" | "get";
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
  fastify.get<CacheParams>("/cache/:method/:key", function (request, reply) {
    const { method, key } = request.params;
    if (method === "set") {
      setKey(key, request.body);
    } else if (method === "get") {
      getKey(key, false);
    }
  });
}
