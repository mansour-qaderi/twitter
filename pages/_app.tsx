import type { AppProps } from "next/app";
import "../styles/globals.css";
import { AppName } from "../components/shared";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full w-full">
      <AppName />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
