export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "only-no-store",
  runtime = "nodejs",
  preferredRegion = "auto";

import Links from "./(ui)/links";
import Canvas from "./(ui)/canvas";
import { pickImage } from "./(api)/api";

export default async function Home() {
  const image = await pickImage("unseen");

  return (
    <div className="flex h-full w-full flex-col justify-center pt-3 md:items-center">
      <h1 className="w-min self-center font-serif text-4xl font-normal">
        GEESE
      </h1>
      <Canvas image={image} />
      <Links />
    </div>
  );
}
