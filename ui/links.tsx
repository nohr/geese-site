const linkArray = [
  { title: "Listen Now", href: "https://listennow.com" },
  { title: "Watch", href: "https://watch.com" },
  { title: "Tour Tickets", href: "https://tourtickets.com" },
  { title: "Merchandise", href: "https://shop.geeseband.com" },
];

function Anchor(link: { title: string; href: string }) {
  const { title, href } = link;
  return (
    <a className="uppercase" href={href} rel="noreferrer" target="_blank">
      {title}
    </a>
  );
}

export default function Links() {
  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-center font-bold">
      {linkArray.map((link, index) => (
        <Anchor {...link} key={index} />
      ))}
    </div>
  );
}
