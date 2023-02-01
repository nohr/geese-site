"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { colorTheme } from "../utils";

export default function Canvas() {
  const [currentImage, setCurrentImage] = useState<string>("");

  return (
    <>
      <div
        style={{
          height: `350px`,
          width: `360px`,
        }}
        className="flex flex-col items-center justify-center self-center"
      ></div>
    </>
  );
}
