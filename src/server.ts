import express from "express";
import { graphqlUploadExpress } from "graphql-upload";
import * as path from "path";
import * as graphql from "./schema";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { json } from "body-parser";
import * as index from "./schema/index";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { HTTP_PORT } from './config';
export const app = express();



export async function start(): Promise<void> {
  try {

  console.log(`Starting on PORT ${HTTP_PORT}`);

  app.use(graphqlUploadExpress());

  //Initialize Webhooks
  app.post(
    "/webhooks/stripe",
    express.raw({ type: "application/json" }),

  );

  app.post(
    "/webhooks/cloudTasks",
    express.raw({ type: "application/json" }),
  );

  //check if indexes exist
  await index.neoSchema.assertIndexesAndConstraints().catch(
    async (e: any) =>
      await index.neoSchema
        .assertIndexesAndConstraints({
          options: { create: true },
        })
        .then((e: any) => console.log("Created Index"))
        .catch((e: any) => console.log("Could Not create Index"))
  );

  const schema = await index.neoSchema.getSchema();

  const initOgm = await index.ogm.init();

  //Websockets
  const httpServer = createServer(app);
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  const cleanUpWsServer = useServer(
    {
      schema,
      context: (ctx) => {
        return ctx;
      },
    },
    wsServer
  );

  console.log("Websocket Server Started");

  const server = graphql.server(schema, httpServer, cleanUpWsServer);

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => await graphql.getContextFromRequest(req),
    })
  );

  return new Promise((resolve, reject): void => {
    try {
      app.listen(HTTP_PORT, () => {
        // var os = require("os");
        // var networkInterfaces = os.networkInterfaces();
        // console.log(networkInterfaces);
        console.log(`Started on PORT ${HTTP_PORT}`);

        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
  } catch (error) {
    console.log("Error Starting Server");
    console.log(error);
  }
}
