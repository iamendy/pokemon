import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["400", "600", "700"],
  variable: "--manrope",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${manrope.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
