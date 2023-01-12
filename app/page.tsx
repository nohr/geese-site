import Links from "./(ui)/links";
import Canvas from "./(ui)/canvas";
import { pickImage } from "./(api)/api";

export default async function Home() {
  const image = await pickImage("unseen");
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <h1 className="font-serif text-xl font-normal">GEESE</h1>
      <Canvas image={image} />
      <Links />
    </div>
  );
}
