import { Driver } from "neo4j-driver";
import { OGM } from "@neo4j/graphql-ogm";
import { FileUpload } from "graphql-upload";
import express from "express";
import * as admin from "firebase-admin";
import { BaseContext } from "@apollo/server";
import { FlavorConfig } from "./flavors";
import { Neo4jGraphQLContext } from "@neo4j/graphql";

export type Context = BaseContext & Neo4jGraphQLContext & {
  ogm: OGM;
  adminOverride?: boolean;
  driver: Driver;
  req: express.Request;
  jwt: void | admin.auth.DecodedIdToken;
  cypherParams: Record<string, any>;
  authHeader: string | undefined;
  flavorConfig: FlavorConfig;
};



export interface FileArgs {
  file: Promise<FileUpload>;
}

export interface ImageArgs extends FileArgs {
  file: Promise<FileUpload>;
  width?: number;
  height?: number;
  tags?: string[];
}
