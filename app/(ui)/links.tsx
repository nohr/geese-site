const linkArray = [
  { title: "Cowboy Nudes", href: "#" },
  { title: "Watch", href: "https://www.youtube.com/@Geeseband"},
  { title: "Tour", href: "https://www.bandsintown.com/a/342405-geese" },
  { title: "Merch", href: "https://store.geeseband.com/" },
];

function Anchor(link: { title: string; href: string }) {
  const { title, href } = link;
  return (
    <a href={href} className="md:hover:animate-pulse" rel="noreferrer" target="_blank">
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
