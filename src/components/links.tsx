import { useState } from "react";
import Newsletter from "./newsletter";
import {Twiddle,Tag} from "./nav.svg"

const linkArray = [
  { title: "cowboy nudes", href: "https://geese.lnk.to/cowboynudes" },
  { title: "watch", href: "https://www.youtube.com/@Geeseband" },
  { title: "tour", href: "https://www.bandsintown.com/a/342405-geese" },
  { title: "merch", href: "https://store.geeseband.com/" },
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
    "md:hover:animate-pulse active:animate-pulse text-center w-fit cursor-pointer select-none	link";

  return (
    <>
      
        <div>
        <div className='flex flex-col justify-center h-[213px] p-[13px_0_18px_0] items-center bg-[url("src/assets/tag.svg")] w-[156px] [svg]:p-[4px_0_8px_0]'
        style={{backgroundPosition:"top 9px left 0px", backgroundRepeat:"no-repeat", backgroundSize:"156px auto", }}>
            <div className ='flex italic text-3xl title'>GEESE</div>
      <Twiddle />
      {newsletter ? <Newsletter setNewsletter={setNewsletter} /> : null}
        {linkArray.map((link, index) => (
          <Anchor className={className} link={link} key={index} />
        ))}
        <div onClick={() => setNewsletter(true)} className={className}>
          newsletter
        </div>
          </div>
        </div>
    </>
  );
}
