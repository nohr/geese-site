"use client";

import styles from "./canvas.module.scss";
import Image from "next/image";
import frame from "../public/frame.png";
// import Generated from "./dalle";

export default function Canvas() {
  return (
    <div className={styles.frame}>
      <Image
        priority
        className={styles.frame_img}
        src={frame}
        alt="Frame for generated images"
      />
      {/* <Generated /> */}
    </div>
  );
}
