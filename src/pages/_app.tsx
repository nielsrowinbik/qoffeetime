import "typeface-montserrat";

import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";

import { ProvideBrewsContext } from "../hooks/use-brews-context";

import "../styles/globals.css";

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
            <DefaultSeo
                titleTemplate="%s | Brewtime"
                title="Create the perfect cup of coffee"
                description="Create the perfect cup of coffee using one of Brewtime's many built-in recipies."
            />
            <Head>
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#ff1744" />
            </Head>
            <ProvideBrewsContext>
                <Component {...pageProps} />
            </ProvideBrewsContext>
        </>
    );
};

export default App;
