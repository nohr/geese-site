import localFont from "@next/font/local";

export const CaslonItalian = localFont({
  src: [
    {
      path: "./files/CaslonItalian-Contra-Web.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./files/CaslonItalian-Italic-Web.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./files/CaslonItalian-Roman-Web.woff2",
      weight: "700",
      style: "roman",
    },
    {
      path: "./files/CaslonItalian-Shaded-Fill-Web.woff2",
      weight: "700",
      style: "shaded fill",
    },
    {
      path: "./files/CaslonItalian-Shaded-Shadow-Web.woff2",
      weight: "900",
      style: "shaded shadow",
    },
    {
      path: "./files/CaslonItalian-Shaded-Web.woff2",
      weight: "800",
      style: "shaded",
    },
  ],
});
