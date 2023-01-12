import "./(ui)/globals.css";
import localFont from "@next/font/local";

const CaslonIonic = localFont({
  src: [
    {
      path: "./(ui)/Caslon Ionic-Regular.otf",
      weight: "400",
      style: "serif",
    },
  ],
  variable: "--font-iconic",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${CaslonIonic.variable} overflow-hidden overscroll-contain bg-cover bg-cracked-plaster [&_h1]:drop-shadow-2xl [&_svg]:drop-shadow-2xl [&_a]:drop-shadow-2xl`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
