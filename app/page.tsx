export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "only-no-store",
  runtime = "nodejs",
  preferredRegion = "auto";

import grabImages from "./(api)";
import Canvas from "./(ui)/canvas";
import Links from "./(ui)/links";

export default async function Home() {
  const images = await grabImages();

  return (
    <div className="flex h-full w-full flex-col items-center pt-3 md:justify-center">
      <Canvas />
      <Links />
    </div>
  );
}
