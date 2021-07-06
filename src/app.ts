import { fastify as fastifyConstructor } from "fastify";
import { languageRoutes, cacheRoutes, basicRoutes } from "./routes";
/**
 * Build and run fastify
 */
const fastify = fastifyConstructor({ logger: true });
fastify.register(languageRoutes);
fastify.register(cacheRoutes);
fastify.register(basicRoutes);

export default fastify;
