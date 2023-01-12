const linkArray = [
  { title: "3D Country", href: "https://listennow.com" },
  { title: "Videos", href: "https://watch.com" },
  { title: "Tour", href: "https://tourtickets.com" },
  { title: "Merch", href: "https://shop.geeseband.com" },
];

function Anchor(link: { title: string; href: string }) {
  const { title, href } = link;
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {title}
    </a>
  );
}

export default function Links() {
  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-center gap-y-3 font-serif text-4xl uppercase	">
      {linkArray.map((link, index) => (
        <Anchor {...link} key={index} />
      ))}
    </div>
  );
}
