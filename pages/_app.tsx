import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import app from "../package.json";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const appName = `${app.name[0].toUpperCase()}${app.name.slice(1)}`;

const ApplePWAPrompt = dynamic(() => import("@/components/ApplePWAPrompt"), {
  ssr: false,
});

const updateHeight = () => {
  document.body.style.height = `${window.innerHeight}px`;
};

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Update the height of the app:
    updateHeight();

    // Set a listerer for resize events to also update the height of the app:
    window.addEventListener("resize", updateHeight);

    // Create a cleanup function to prevent memory leaks and return it:
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <DefaultSeo defaultTitle={appName} titleTemplate={`%s – ${appName}`} />
      <ApplePWAPrompt />
      <Component {...pageProps} />
    </>
  );
};

export default App;
