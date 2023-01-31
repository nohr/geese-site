"use client";

import { useState } from "react";
import Newsletter from "./newsletter";

const linkArray = [
  { title: "Cowboy Nudes", href: "#" },
  { title: "Watch", href: "https://www.youtube.com/@Geeseband" },
  { title: "Tour", href: "https://www.bandsintown.com/a/342405-geese" },
  { title: "Merch", href: "https://store.geeseband.com/" },
];

function Anchor({ className, link }: any) {
  const { title, href } = link;
  return (
    <a href={href} className={className} rel="noreferrer" target="_blank">
      {title}
    </a>
  );
}

export default function Links() {
  const [newsletter, setNewsletter] = useState<boolean>(false);
  const className =
    "md:hover:animate-pulse active:animate-pulse text-center w-fit cursor-pointer select-none";

  return (
    <>
      {newsletter ? <Newsletter setNewsletter={setNewsletter} /> : null}
      <div className="flex w-fit flex-col flex-wrap items-center justify-center gap-y-3 self-center font-serif text-2xl uppercase">
        {linkArray.map((link, index) => (
          <Anchor className={className} link={link} key={index} />
        ))}
        <div onClick={() => setNewsletter(true)} className={className}>
          Newsletter
        </div>
      </div>
    </>
  );
}
