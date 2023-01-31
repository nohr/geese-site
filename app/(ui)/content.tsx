"use client";

import React, { useState } from "react";
import Canvas from "./canvas";
import Links from "./links";

export default function Content({ image }: { image: string }) {
  const [newsletter, setNewsletter] = useState(false);

  console.log("This site was made for Geese by Paredol. https://paredol.com/");

  return (
    <div className="flex h-full w-full flex-col items-center pt-3 md:justify-center">
      <Canvas image={image} />
      <Links newsletter={newsletter} setNewsletter={setNewsletter} />
    </div>
  );
}
