import * as dotenv from "dotenv";
import path from "path";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"; 

import { OpenAIEmbeddings } from "@langchain/openai";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";

dotenv.config({ path: ".env.local" });
const fs = require("fs");


const run = async () => {
  const rawText = fs.readFileSync("data/DcisionAI.txt", "utf8");

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });

  const docs = await splitter.createDocuments([rawText]);
  console.log("ENV KEY FOUND:", process.env.OPENAI_API_KEY?.slice(0, 10)); // Should print sk-...

  const vectorStore = await HNSWLib.fromDocuments(
    docs,
    new OpenAIEmbeddings({
      openAIApiKey:process.env.OPENAI_API_KEY
    })
  );

  const persistDir = path.resolve("data/hnswlib");
  await vectorStore.save(persistDir);

  console.log(`✅ Vector store saved to ${persistDir}`);
};

run();
