import React, { useEffect, useState } from "react";
// import { colorTheme } from "./utils";
import Frame from "../assets/frame_shadow_comp.png"
import poissonProcess from "poisson-process"

export default function Canvas({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    (async () => {
      const p = poissonProcess.create(5000, function updateImage() {
        var r = Math.floor(Math.random() * images.length);
        // console.log(getRandomInt(2023010100, strftime('%Y%m%d%H', new Date())));
        if (images[r]) {
          setCurrentImage(images[r]);
          // colorTheme(images[r]);
        }
      });

      p.start();
    })();
  }, [images]);

  return (
    <div className="inline relative w-[360px] h-[350px]">
      <img
        className="absolute w-[360px] h-[350px] z-50"
        src={Frame}
        alt="frame border"
      />
      {currentImage ? (
        <img
          className="gallery_image z-10"
          style={{ width: "100%", height: "auto", transform:"scale(0.7)" }}
          src={currentImage}
          alt="gallery image"
          width={360}
          height={350}
        />
      ) : null}
    </div>
  );
}
