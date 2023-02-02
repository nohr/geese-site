// This is a PubSub function that runs every 15 minutes and generates an image
// from the prompt. It then uploads the image to the storage bucket.

import * as functions from "firebase-functions";
import {Configuration, OpenAIApi} from "openai";
import * as admin from "firebase-admin";
import {Request, Response} from "firebase-functions";

// Init Firebase Admin
admin.initializeApp();
const storage = admin.storage();
const bucket = storage.bucket();

// Init OpenAI
const configuration = new Configuration({
  organization: "org-DGi71HQMgG2FxiO61iLqikt7",
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);
// eslint-disable-next-line max-len
const prompt = "A closeup cowboy smiling into the camera in vivid high definition in front of a mountain";

export const generateImage = functions.pubsub
    .schedule("every 1 hours")
    .onRun(async () => {
      console.log("generating image");
      // Generate an image from the prompt
      const response = await openai.createImage({
        prompt: prompt,
        size: "256x256",
        n: 1,
        response_format: "b64_json",
      });
      const base64 = response.data.data[0].b64_json;
      if (base64) {
        // Convert base64 to buffer
        const buffer = Buffer.from(base64, "base64");
        // Upload the buffer to the storage bucket with a name of the current
        // time in milliseconds
        const name = `${Date.now()}.png`;
        const file = bucket.file(`unseen/${name}`);
        await file.save(buffer,
            {
              metadata: {
                contentType: "image/png",
              },
            });
        return console.log(`uploaded ${name} to 'unseen' folder in bucket`);
      }
      return null;
    });

// a function that returns an array of all the files in the unseen
// and seen folders in the storage bucket
export const getFiles = functions.https
    .onRequest(async (req:Request, res:Response) => {
      const [unseenFiles] = await bucket.getFiles({prefix: "unseen/"});
      const [seenFiles] = await bucket.getFiles({prefix: "seen/"});
      const unseenNames = unseenFiles.map((file) => file.publicUrl());
      const seenNames = seenFiles.map((file) => file.publicUrl());
      res.send(unseenNames.concat(seenNames));
    });
