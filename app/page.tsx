import { CaslonItalian } from "./fonts/Font";
import styles from "./page.module.scss";
import Links from "../links/Links";
import Canvas from "../canvas/canvas";
import { Geese } from "./titles.style";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Geese style={CaslonItalian.style}>Geese</Geese>
        <Canvas />
        <Links />
      </main>
    </div>
  );
}
