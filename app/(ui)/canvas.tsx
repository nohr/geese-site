"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { colorTheme } from "../utils";
import Frame from "../../public/frame_shadow_comp.png";
var poissonProcess = require("poisson-process");

export default function Canvas({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    (async () => {
      const p = poissonProcess.create(5000, function updateImage() {
        var r = Math.floor(Math.random() * images.length);
        // console.log(getRandomInt(2023010100, strftime('%Y%m%d%H', new Date())));
        if (images[r]) {
          setCurrentImage(images[r]);
          colorTheme(images[r]);
        }
      });

      p.start();
    })();
  }, [images]);

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Image
        className="absolute -top-[40px] -left-[50px] h-[350px] w-[360px] "
        src={Frame}
        alt="frame border"
        width={360}
        height={350}
        priority
      />
      {currentImage ? (
        <Image
          className="gallery_image"
          style={{ width: "100%", height: "auto" }}
          src={currentImage}
          alt="gallery image"
          width={360}
          height={350}
        />
      ) : null}
    </div>
  );
}
