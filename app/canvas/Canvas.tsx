"use client";

import styles from "./canvas.module.scss";
import { useEffect, useRef } from "react";
import Image from "next/image";
import frame from "../../public/frame.png";
import Generated from "./dalle";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    canvasRef.current && console.log(canvasRef.current);

    return () => {};
  }, [canvasRef]);

  return (
    <div className={styles.frame}>
      <Image
        className={styles.frame_img}
        src={frame}
        alt="Frame for generated images"
      />
      <Generated />
    </div>
  );
}
