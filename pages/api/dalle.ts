import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const key = process.env.OPEN_AI;

const configuration = new Configuration({
  organization: "org-DGi71HQMgG2FxiO61iLqikt7",
  apiKey: key,
});
const openai = new OpenAIApi(configuration);
type ResponseData = {
  prompt: string;
  url: any;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // TODO: Replace with Geese's prompt
  const prompt = "a white siamese cat";
  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "256x256",
  });
  if (!response.data) throw new Error("Unable to get image");
  res.status(200).json({
    prompt: prompt,
    url: response.data.data[0].url,
  });
  // console.log("got " + response.data.data[0].url);
  // return response.data.data[0].url;
}

// const response = await openai.createImage({
//   prompt: prompt,
//   n: 1,
//   size: "256x256",http://localhost:1027/AF227TWA
// });

// if (response.data.data[0].url) {
//   const url = response.data.data[0].url;
//   console.log(url);

//   //  Save the image URL to a file
//   const imageFile = await fetch(url);
//   const imageBlob = await imageFile.blob();
//   const buffer = Buffer.from(await imageBlob.arrayBuffer());
//   writeFileSync(`./img/${Date.now()}.png`, buffer);
// }
