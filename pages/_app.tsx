import type { AppProps } from "next/app";
import "../styles/globals.css";
import { AppName } from "../components/shared";
import { Sidebar } from "../layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full w-full">
      <AppName />
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </div>
  );
}

export default MyApp;
