"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Application, Assets, Sprite, Texture } from "pixi.js";
import frame from "@public/frame.png";
import { FaHatCowboy } from "react-icons/fa";
import { handleSeen, pickImage } from "../(api)/api";
import { colorTheme } from "../utils";
import _ from "lodash";

export default function Canvas({
  image,
  loaded,
  setLoaded,
}: {
  image: string;
  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  const [size, setSize] = useState<number>(400);
  const ref = useRef<HTMLDivElement>(null!);
  const [currentImage, setCurrentImage] = useState<string>("");
  const app = useRef<Application>();

  // Create PIXI app
  useEffect(() => {
    const mobile = window.innerWidth <= 768;
    if (mobile) {
      setSize(window.innerWidth - 30);
    }
    app.current = new Application({
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resolution: 1,
      backgroundColor: "transparent",
      backgroundAlpha: 0,
      width: size,
      height: size,
    });

    setCurrentImage(image);
  }, [image, size]);

  // Fetch a new image when the mouse enters the ref element
  useEffect(() => {
    async function handleMouseEnter() {
      setCurrentImage(await pickImage("seen"));
      setLoaded(false);
      // console.log(currentImage);
    }
    ref.current.addEventListener("mouseenter", handleMouseEnter);
  }, [setLoaded]);

  return (
    <>
      <div
        ref={ref}
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
        className="flex flex-col items-center justify-center self-center"
      >
        {!loaded && (
          <FaHatCowboy className="absolute m-0 block h-[150px] w-auto animate-bounce" />
        )}
        <canvas id="pixi-canvas" className="h-full w-full"></canvas>
      </div>
      <RenderedImage
        app={app}
        size={size}
        currentImage={currentImage}
        setLoaded={setLoaded}
      />
      {loaded && <Frame app={app} currentImage={currentImage} size={size} />}
    </>
  );
}

function Frame({ ...props }) {
  const { app, currentImage, size } = props;
  // Use the useEffect hook to add the frame to the PIXI scene
  useEffect(() => {
    // load the frame to the PIXI scene
    (async () => {
      if (currentImage === "") return;
      await Assets.load(frame)
        .then((frameTex: Texture) => {
          // const fw = frameTex.width;
          // const fh = frameTex.height;
          const frame = new Sprite(frameTex);

          frame.width = size;
          frame.height = size;
          frame.anchor.set(0.5);
          frame.x = size / 2;
          frame.y = size / 2;

          // add frame to scene
          app.current.stage.addChild(frame);
        })
        .catch((err: any) => console.log(err));
    })();
  }, [app, currentImage, size]);
  return <></>;
}

function generateSprite(photoTex: Texture, size: number, mobile: boolean) {
  console.log(size);
  const photo = new Sprite(photoTex);
  // adjust size and position of sprite
  photo.width = size - (mobile ? 120 : 100);
  photo.height = size - (mobile ? 120 : 100);
  photo.x = size / 2;
  photo.y = size / 2;
  photo.zIndex = 0;
  photo.anchor.set(0.5, 0.5);
  return photo;
}

async function addToScene(
  photo: string,
  app: Application,
  size: number,
  mobile: boolean
) {
  colorTheme(photo);
  // Add image to the PIXI scene
  await Assets.load(photo)
    .then((photoTex: Texture) => {
      const photo = generateSprite(photoTex, size, mobile);
      app.stage.addChild(photo);
    })
    .catch((err: any) => console.log(err));
}

function RenderedImage({ ...props }) {
  const { app, size, currentImage, setLoaded } = props;
  // console.log(currentImage);

  const firstRender = useRef(true);
  // Add image to scene
  useEffect(() => {
    const mobile = window.innerWidth <= 768;
    if (currentImage === "") return;
    (async () => {
      // process image in storage bucket
      // console.log(firstRender.current);

      let photo;
      // only process image if its the first time its been seen
      if (firstRender.current === true) {
        photo = (await handleSeen(currentImage)) as string;
        console.log(firstRender.current);
        firstRender.current = false;
        await addToScene(photo, app.current, size, mobile).then(() =>
          setLoaded(true)
        );
      } else {
        await addToScene(currentImage, app.current, size, mobile).then(() =>
          setLoaded(true)
        );
      }
    })();
  }, [app, currentImage, setLoaded, size]);

  return <></>;
}
