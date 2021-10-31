import '../styles/globals.css';

import Head from 'next/head';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

const updateHeight = () => {
    document.body.style.height = `${window.innerHeight}px`;
};

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        // Update the height of the app:
        updateHeight();

        // Set a listerer for resize events to also update the height of the app:
        window.addEventListener('resize', updateHeight);

        // Create a cleanup function to prevent memory leaks and return it:
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return <Component {...pageProps} />;
};

export default App;
