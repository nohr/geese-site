import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-DGi71HQMgG2FxiO61iLqikt7",
  apiKey: process.env.OPEN_AI,
});
const openai = new OpenAIApi(configuration);
type ResponseData = {
  prompt: string;
  url: string | unknown;
};
// This api route is called by the client to generate an image url. It is not called by the cron job.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt =
    "A closeup cowboy smiling into the camera in vivid high definition in front of a mountain";

  try {
    const response = await openai.createImage({
      prompt: prompt,
      size: "256x256",
      n: 1,
    });
    if (response.data.data[0].url) {
      const image_url = response.data.data[0].url;
      res.status(200).json({
        prompt: prompt,
        url: image_url,
      });
      return response.data.data[0].url;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
    res.status(500).json({ prompt: prompt, url: error });
  }
}
