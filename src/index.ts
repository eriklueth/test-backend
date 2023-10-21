// import * as server from "./server";
// import * as neo4j from "./neo4j";
// import * as firebase from "./firebase";

import { generate } from "@neo4j/graphql-ogm";
import path from "path";
//import { ogm } from "./schema";

async function main() {
  try {
  console.log("Starting");

  console.log("Generating types: ", process.env.GENERATE ?? false);

  //Only generate types when you make a schema change
  if (process.env.GENERATE) {
    console.log("Generate Types");
    //make the file be under src/generated/ogm-types.ts
    const outFile = path.join(
      __dirname,
      "..",
      "src\\generated",
      "ogm-types.ts"
    );
    console.log("Outfile: ", outFile);

    //Needs to be here to not preload before config is loaded since depends on config
    const { ogm } = require("./schema");

    await generate({
      ogm,
      outFile,
    }).catch((e: any) => {
      console.log("Error generate: ", e);
    }
    );

    console.log("Types Generated");

    process.exit(1);
  }

  const neo4j = require("./neo4j");
  const server = require("./server");


  await neo4j.connect();

  await server.start();

  console.log("Started");

} catch (e) {
  console.log("Error: ", e);

  process.exit(1);
}
}

main();
