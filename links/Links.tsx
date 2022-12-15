import styles from "./links.module.scss";
import { CaslonItalian } from "../app/fonts/Font";

const linkArray = [
  { title: "Listen Now", href: "https://listennow.com" },
  { title: "Watch", href: "https://watch.com" },
  { title: "Tour Tickets", href: "https://tourtickets.com" },
  { title: "Merchandise", href: "https://shop.geeseband.com" },
];

type linkProps = {
  title: string;
  href: string;
};

function Anchor(link: linkProps) {
  const { title, href } = link;
  return (
    <a
      className={CaslonItalian.className}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {title}
    </a>
  );
}

export default function Links() {
  return (
    <div className={styles.links}>
      {linkArray.map((link, index) => (
        <Anchor {...link} key={index} />
      ))}
    </div>
  );
}
