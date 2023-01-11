import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-DGi71HQMgG2FxiO61iLqikt7",
  apiKey: process.env.OPEN_AI,
});
const openai = new OpenAIApi(configuration);

// TODO: Run this function in a cron job
export default async function generate() {
  try {
    const prompt =
      "A closeup cowboy smiling into the camera in vivid high definition in front of a mountain";

    const response = await openai.createImage({
      prompt: prompt,
      size: "256x256",
      n: 1,
    });
    if (response.data.data[0].url) {
      const image_url = response.data.data[0].url;
      return image_url;
      //TODO: Upload these as files to the storage bucket and return the URL
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
}
