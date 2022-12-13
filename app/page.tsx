import { CaslonItalian } from "./fonts/Font";
import styles from "./page.module.scss";
import Links from "../links/Links";
import Canvas from "../canvas/Canvas";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={CaslonItalian.className} style={{ fontWeight: 700 }}>
          Geese
        </h1>
        <Canvas />
        <Links />
      </main>
    </div>
  );
}
