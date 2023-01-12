import "./(ui)/globals.css";
import localFont from "@next/font/local";
import bg from "@public/bg_cracked_plaster.jpg";

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
      className={`${CaslonIonic.variable} overflow-hidden overscroll-contain bg-cover bg-cracked-plaster`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
