"use client";

import React, { useEffect, useState } from "react";
import { Application, Assets, Sprite } from "pixi.js";
import image from "@public/frame.png";
import { TbLoaderQuarter } from "react-icons/tb";

export default function Canvas({ url }: { url: string | undefined }) {
  // const [loaded, setLoaded] = useState(false);

  // Use the useEffect hook to initialize the PIXI application when the component is mounted
  useEffect(() => {
    const app = new Application({
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resolution: 1,
      backgroundColor: "transparent",
      backgroundAlpha: 0,
      width: 400,
      height: 400,
    });

    (async () => {
      await Assets.load(image).then((texture) => {
        // setLoaded(true);
        const frame = new Sprite(texture);
        frame.width = texture.width;
        frame.height = texture.height;

        app.stage.addChild(frame);
      });
    })();
  }, []);

  return (
    <div
      style={{
        height: "400px",
        width: "400px",
      }}
    >
      <canvas id="pixi-canvas" className="h-full w-full"></canvas>
    </div>
  );
}
