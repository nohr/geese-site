import React from "react";
import { GrClose } from "react-icons/gr";

export default function Newsletter({ setNewsletter }: { setNewsletter: any }) {
  // get the theme color from meta tag
  const themeColor = document
    .querySelector("meta[name=theme-color]")
    ?.getAttribute("content") as string;

  return (
    <div
      style={{
        border: `3px solid ${themeColor}`,
        backgroundColor: "white",
        left: "50%",
        top: "50%",
        zIndex: 100,
        transform: "translate(-50%,-50%)",
      }}
      className={`bg absolute flex h-min w-4/5 flex-col gap-y-5 rounded-lg p-4 pt-8 md:w-72`}
    >
      <GrClose
        onClick={() => setNewsletter(false)}
        className="absolute top-1 right-1 m-2 h-8 w-auto cursor-pointer md:h-6"
      />
      <p style={{ color: themeColor }} className="text-center">
        Join our newsletter
      </p>
      <form
        action="https://geeseband.us7.list-manage.com/subscribe/post"
        method="post"
        className="flex flex-col items-center gap-y-2"
      >
        <input type="hidden" name="u" value="44a993044898cd57f20e98113" />
        <input type="hidden" name="id" value="8d26f98d1a" />
        <tr>
          <td>
            <input
              type="email"
              autoCapitalize="off"
              autoCorrect="off"
              name="MERGE0"
              id="MERGE0"
              size={25}
              placeholder="Enter your email"
              className="rounded-md  border-2 p-2 outline-none invalid:border-red-500"
              value=""
            />
            <div className="error"></div>
          </td>
        </tr>
        <tr>
          <td>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_44a993044898cd57f20e98113_8d26f98d1a"
                tabIndex={-1}
                value=""
              />
            </div>
            <input
              type="submit"
              className="w-min cursor-pointer rounded-md p-2 text-white"
              // onClick={() => setNewsletter(false)}
              style={{ backgroundColor: themeColor }}
              name="submit"
              value="Subscribe"
            />
          </td>
        </tr>
      </form>
    </div>
  );
}
