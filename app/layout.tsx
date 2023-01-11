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
    <html lang="en" className={`${CaslonIonic.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
