import path from "path";
import * as dotenv from 'dotenv';

const envPath = path.resolve(
  process.cwd(),
  ".env.local"
);

const conf = dotenv.config({
  path: envPath,
});


export const HTTP_PORT = 4000;
export const NEO4J_URL =
  process.env.NEO4J_URL ?? "bolt://localhost:7687";
export const NEO4J_USER = process.env.NEO4J_USER ?? "neo4j";
export const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD ?? "RandomPassword";