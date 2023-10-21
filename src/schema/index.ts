import { Neo4jGraphQL, Neo4jGraphQLConstructor } from "@neo4j/graphql";
import { OGM } from "@neo4j/graphql-ogm";
import { ApolloServer } from "@apollo/server";
import * as admin from "firebase-admin";
import type express from "express";
import { driver } from "../neo4j";
import { Context } from "../types";

import * as Linktree from "./Linktree";

import * as Ticketing from "./ticketing/index";

import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
//import * as Admin from "./Admin";

import { GraphQLSchema } from "graphql";
import responseCachePlugin from "@apollo/server-plugin-response-cache";
import { ApolloServerPluginSchemaReporting } from "@apollo/server/plugin/schemaReporting";
import { ApolloServerPluginUsageReporting } from "@apollo/server/plugin/usageReporting";
import { Server } from "http";
import { Disposable } from "graphql-ws/lib/common";
import { ModelMap } from "../generated/ogm-types";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { APP_VERSION, flavorConfig } from "../flavors";

export const typeDefs = [

  Linktree.typeDefs,

  ...Ticketing.typeDefs,
  //Admin.typeDefs
];

export const resolvers = {

  ...Ticketing.resolvers,

  Mutation: {
    ...Ticketing.mutationResolvers,
  },
  Query: {
    ...Ticketing.queryResolvers,

  },
};

export const populatedByCallbacks = {

};

export const Neo4JGraphQLConfig : Neo4jGraphQLConstructor = {
  typeDefs,
  resolvers,
  driver,
  debug: true,
  features: {
    populatedBy: {
      callbacks: populatedByCallbacks,
    },
    subscriptions: true, //new Neo4jGraphQLSubscriptionsSingleInstancePlugin(),
    authorization: {
      key: "SomeRandomStuffINeedToPutHere",
    },
  },
};

export const ogm = new OGM<ModelMap>(Neo4JGraphQLConfig);

export const neoSchema = new Neo4jGraphQL(Neo4JGraphQLConfig);

async function decodedJWT(idToken: string): Promise<DecodedIdToken | void> {
  //console.log("Decoding IDTOKEN: " + idToken);

  // If no token, return void
  if (idToken == "") return;

  return await admin
    .auth()
    .verifyIdToken(idToken.replace("Bearer ", ""))
    .then((decodedToken) => {
      console.log("Decoded Token: " + JSON.stringify(decodedToken));
      // console.log("TOKEN: " + idToken);
      console.log("UserID: " + decodedToken.sub);
      return decodedToken;
    })
    .catch((error) => {
      console.log("Error: " + "Token: " + idToken + "E:" + error);
      return;

      //throw new Error("Invalid auth token");
    });
}

export function server(
  schema: GraphQLSchema,
  httpServer: Server,
  cleanUpWsServer: Disposable
): ApolloServer {
  return new ApolloServer({
    schema: schema,
    introspection: true,
    plugins: [
      // ApolloServerPluginUsageReporting({
      //   sendVariableValues: { exceptNames: ["password"] },
      //   sendHeaders: { all: true },
      //   // If you pass unmodified: true to the usage reporting
      //   // plugin, Apollo Studio receives ALL error details
      //   sendErrors: { unmodified: true },
      // }),
      ApolloServerPluginDrainHttpServer({
        httpServer,
      }),
      {
        async serverWillStart() {
          return Promise.resolve({
            async drainServer() {
              await cleanUpWsServer.dispose();
            },
          });
        },
      },
   //   ApolloServerPluginSchemaReporting(),
      responseCachePlugin({
        sessionId: async (requestContext) =>
          requestContext.request.http?.headers.get("Authorization") || null,
      }),
    ],
  });
}

export const getContextFromRequest = async (req: express.Request) =>
  await decodedJWT(req.headers.authorization || "").then(
    async (decodedJWT) =>
      <Context>{
        ogm,
        driver,
        req,
        //jwt: decodedJWT ?? {}, // Leads to isAuthenticated = true but it should be false
        jwt: decodedJWT, //This leads to "Cannot read properties of undefined (reading 'claims'),"
        authHeader: req.headers.authorization,
        flavorConfig: flavorConfig(parseAPPFlavorHeader(req.rawHeaders)),
      }
  );

export function parseAPPFlavorHeader(headers: string[]): APP_VERSION {
  var parsedFlavor = APP_VERSION.other;
  var lowercaseHeaders = headers.map((h) => h.toLowerCase());
  if (lowercaseHeaders.includes("app_flavor")) {
    try {
      var value = headers[lowercaseHeaders.indexOf("app_flavor") + 1];
      console.log("Header ", value);
      const isEnumName = <T extends object>(
        str: string,
        _enum: T
      ): str is Extract<keyof T, string> => str in _enum;
      const enumFromName = <T extends object>(name: string, _enum: T) => {
        if (!isEnumName(name, _enum)) throw Error(); // here fail fast as an example
        return _enum[name];
      };
      parsedFlavor = enumFromName(value, APP_VERSION);
    } catch (error) {
      console.log("Could not parse APP_FLAVOR Header ");
    }
  }
  console.log("Header Parsed ", APP_VERSION[parsedFlavor]);
  return parsedFlavor;
}
