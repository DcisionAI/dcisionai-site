import fs from "fs";
import * as dotenv from "dotenv";
import path from "path";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";

dotenv.config();

const run = async () => {
  const rawText = fs.readFileSync("data/DcisionAI.txt", "utf8");

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });

  const docs = await splitter.createDocuments([rawText]);

  const vectorStore = await HNSWLib.fromDocuments(
    docs,
    new OpenAIEmbeddings({
      openAIApiKey:'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',
    })
  );

  const persistDir = path.resolve("data/hnswlib");
  await vectorStore.save(persistDir);

  console.log(`✅ Vector store saved to ${persistDir}`);
};

run();
