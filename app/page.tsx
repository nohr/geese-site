import Links from "../ui/links";
import Canvas from "../ui/canvas";

export default async function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8">
      <h1>Geese</h1>
      <Canvas />
      <Links />
    </div>
  );
}
