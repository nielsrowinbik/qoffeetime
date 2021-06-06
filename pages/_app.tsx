import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../styles/globals.css';

import { ProvideBrewsContext } from '../lib/brews';

const updateHeight = () => {
    document.body.style.height = `${window.innerHeight}px`;
};

export default function App({ Component, pageProps }) {
    useEffect(() => {
        // Update the height of the app:
        updateHeight();

        // Set a listerer for resize events to also update the height of the app:
        window.addEventListener('resize', updateHeight);

        // Create a cleanup function to prevent memory leaks and return it:
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <ThemeProvider attribute="class">
            <Head>
                <title>Create the perfect cup of coffee</title>
                <link rel="manifest" href="/site.webmanifest" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <ProvideBrewsContext>
                <Component {...pageProps} />
            </ProvideBrewsContext>
        </ThemeProvider>
    );
}
