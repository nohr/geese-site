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
      {/* <form
        action="https://geeseband.us7.list-manage.com/subscribe/post"
        method="post"
        className="flex flex-col items-center gap-y-2"
      >
        <input
          type="hidden"
          name="u"
          readOnly
          value="44a993044898cd57f20e98113"
        />
        <input type="hidden" name="id" readOnly value="8d26f98d1a" />

        <input
          type="email"
          autoCapitalize="off"
          autoCorrect="off"
          name="MERGE0"
          id="MERGE0"
          size={25}
          placeholder="Enter your email"
          className="rounded-md  border-2 p-2 outline-none invalid:border-red-500"
        />
        <div className="error"></div>

        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_44a993044898cd57f20e98113_8d26f98d1a"
            tabIndex={-1}
            readOnly
            value=""
          />
        </div>
        <input
          type="submit"
          className="w-min cursor-pointer rounded-md p-2 text-white"
          style={{ backgroundColor: themeColor }}
          // onClick={() => setNewsletter(false)}
          name="submit"
          value="Subscribe"
        />
      </form> */}
      <div id="mc_embed_signup">
        <form
          action="https://geeseband.us7.list-manage.com/subscribe/post?u=44a993044898cd57f20e98113&amp;id=8d26f98d1a&amp;f_id=00d6d0e4f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
        >
          <div
            id="mc_embed_signup_scroll"
            className="flex flex-col items-center gap-y-2"
          >
            <div className="mc-field-group">
              <input
                type="email"
                // value=""
                name="EMAIL"
                // className="required email"
                className="rounded-md  border-2 p-2 outline-none invalid:border-red-500"
                id="mce-EMAIL"
                placeholder="Email Address"
                required
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
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
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                // className="button"
                className="w-min cursor-pointer rounded-md p-2 text-white"
                style={{ backgroundColor: themeColor }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
