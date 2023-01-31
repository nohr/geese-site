"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import frame from "@public/frame.png";
import { FaHatCowboy } from "react-icons/fa";
import { handleSeen, pickImage } from "../(api)/api";
import { colorTheme } from "../utils";

export default function Canvas({
  image,
  loaded,
  setLoaded,
}: {
  image: string;
  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  newsletter: boolean;
}) {
  const [currentImage, setCurrentImage] = useState<string>("");

  return (
    <>
      <div
        style={{
          height: `350px`,
          width: `360px`,
        }}
        className="flex flex-col items-center justify-center self-center"
      >
        {!loaded ? (
          <FaHatCowboy className="absolute m-0 block h-[150px] w-auto animate-bounce" />
        ) : null}
      </div>
    </>
  );
}
