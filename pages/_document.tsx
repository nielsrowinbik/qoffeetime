import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
    <Html lang="en" style={{ touchAction: 'none' }}>
        <Head>
            <meta charSet="utf-8" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#ff1744" />
            <meta
                name="msapplication-TileImage"
                content="/mstile-144x144.png"
            />
            <meta name="theme-color" content="#ff1744" />
        </Head>
        <body
            className="min-h-screen overscroll-none bg-brand text-white"
            style={{ touchAction: 'none' }}
        >
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
