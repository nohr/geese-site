import Links from "./(ui)/links";
import Canvas from "./(ui)/canvas";

export default async function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <h1 className="font-serif text-xl font-normal">GEESE</h1>
      <Canvas url={undefined} />
      <Links />
    </div>
  );
}
