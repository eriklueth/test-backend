import * as neo4j from "neo4j-driver";
import { NEO4J_PASSWORD, NEO4J_URL, NEO4J_USER } from "./config";

export const driver = neo4j.driver(
  NEO4J_URL,
  neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)
);

export async function connect() {
  console.log("Connecting to Neo4J at ", NEO4J_URL);

  await driver.verifyConnectivity();
  console.log("Connected to Neo4J");
}

export function disconnect() {
  return driver.close();
}
