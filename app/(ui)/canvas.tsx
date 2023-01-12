"use client";

import React, { useEffect, useRef, useState } from "react";
import { Application, Assets, Sprite, Texture } from "pixi.js";
import frame from "@public/frame.png";
import { FaHatCowboy } from "react-icons/fa";
import { handleSeen } from "../(api)/api";
import { changeThemeColor } from "../utils";
var Vibrant = require("node-vibrant");

export default function Canvas({ image }: { image: string }) {
  const [loaded, setLoaded] = useState(false);
  const size = useRef(400);
  const ref = useRef<HTMLDivElement>(null!);

  // Use the useEffect hook to initialize the PIXI application when the component is mounted
  useEffect(() => {
    const mobile = window.innerWidth <= 768;
    if (mobile) {
      size.current = window.innerWidth - 20;
    }
    const app = new Application({
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resolution: 1,
      backgroundColor: "transparent",
      backgroundAlpha: 0,
      width: size.current,
      height: size.current,
    });

    (async () => {
      const photo = await handleSeen(image);
      Vibrant.from(photo)
        .getPalette()
        .then((palette: { Vibrant: { hex: string } }) =>
          changeThemeColor(palette.Vibrant.hex)
        )
        .catch((err: any) => console.log(err));
      Assets.addBundle("images", {
        frameTex: frame,
        photoTex: photo as string,
      });

      await Assets.loadBundle("images")
        .then(
          ({
            frameTex,
            photoTex,
          }: {
            frameTex: Texture;
            photoTex: Texture;
          }) => {
            setLoaded(true);
            const fw = frameTex.width;
            const fh = frameTex.height;
            const frame = new Sprite(frameTex);
            frame.width = size.current;
            frame.height = size.current;

            const photo = new Sprite(photoTex);
            photo.width = size.current - (mobile ? 125 : 100);
            photo.height = size.current - (mobile ? 125 : 100);
            photo.x = size.current / 2;
            photo.y = size.current / 2;
            photo.anchor.set(0.5, 0.5);

            app.stage.addChild(photo);
            app.stage.addChild(frame);
          }
        )
        .catch((err: any) => console.log(err));
    })();
  }, [image]);

  // call a function to log to the console when the mouse enters the ref
  useEffect(() => {
    // disable the function from running for 10s after the mouse enters
    let timeout: any;
    const handleMouseEnterWithTimeout = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      console.log("Mouse entered");
      timeout = setTimeout(() => {
        timeout = null;
      }, 10000);
    };
    ref.current.addEventListener("mouseenter", handleMouseEnterWithTimeout);
    return () => {
      ref.current.removeEventListener(
        "mouseenter",
        handleMouseEnterWithTimeout
      );
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: `${size.current}px`,
        width: `${size.current}px`,
      }}
      className="flex flex-col items-center justify-center  self-center"
    >
      {!loaded && (
        <FaHatCowboy className="absolute m-0 block h-[150px] w-auto animate-bounce" />
      )}
      <canvas id="pixi-canvas" className="h-full w-full"></canvas>
    </div>
  );
}
