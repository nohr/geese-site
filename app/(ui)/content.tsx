"use client";

import React, { useState } from "react";
import Canvas from "./canvas";
import Links from "./links";

export default function Content({ image }: { image: string }) {
  const [loaded, setLoaded] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  console.log("This site was made for Geese by Paredol. https://paredol.com/");

  return (
    <div className="flex h-full w-full flex-col items-center pt-3 md:justify-center">
      <h1 className="w-min self-center font-serif text-4xl font-normal">
        GEESE
      </h1>
      <Canvas
        image={image}
        loaded={loaded}
        setLoaded={setLoaded}
        newsletter={newsletter}
      />
      {loaded ? (
        <Links newsletter={newsletter} setNewsletter={setNewsletter} />
      ) : (
        <div style={{ height: "208px", width: "20px" }}></div>
      )}
    </div>
  );
}
