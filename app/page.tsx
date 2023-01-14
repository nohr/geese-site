export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "only-no-store",
  runtime = "nodejs",
  preferredRegion = "auto";

import Content from "./(ui)/content";
import { pickImage } from "./(api)/api";

export default async function Home() {
  const image = await pickImage("unseen");

  return <Content image={image} />;
}
