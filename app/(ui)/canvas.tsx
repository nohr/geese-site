"use client";

import React, { useEffect, useState } from "react";
import { Application, Assets, Sprite, Texture } from "pixi.js";
import frame from "@public/frame.png";
import { TbLoaderQuarter } from "react-icons/tb";
import { handleSeen } from "../(api)/api";

export default function Canvas({ image }: { image: string | null }) {
  // const [loaded, setLoaded] = useState(false);

  // download the passed image from the unseen folder and upload it to the seen folder

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
      const photo = await handleSeen(image);

      Assets.addBundle("images", {
        frameTex: frame,
        photoTex: photo,
      });

      await Assets.loadBundle("images").then(
        ({ frameTex, photoTex }: { frameTex: Texture; photoTex: Texture }) => {
          // setLoaded(true);

          const frame = new Sprite(frameTex);
          frame.width = frameTex.width;
          frame.height = frameTex.height;

          const photo = new Sprite(photoTex);
          photo.width = frameTex.width - 125;
          photo.height = frameTex.height - 125;
          photo.x = frameTex.width / 2;
          photo.y = frameTex.height / 2;
          photo.anchor.set(0.5, 0.5);

          app.stage.addChild(photo);
          app.stage.addChild(frame);
        }
      );
    })();
  }, [image]);

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
