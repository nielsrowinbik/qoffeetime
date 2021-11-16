import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
    <Html lang="en" style={{ touchAction: 'none' }}>
        <Head>
            <meta charSet="utf-8" />
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/apple-touch-icon-57x57.png?v=2"
            />
            <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/apple-touch-icon-60x60.png?v=2"
            />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/apple-touch-icon-72x72.png?v=2"
            />
            <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/apple-touch-icon-76x76.png?v=2"
            />
            <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/apple-touch-icon-114x114.png?v=2"
            />
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/apple-touch-icon-120x120.png?v=2"
            />
            <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/apple-touch-icon-144x144.png?v=2"
            />
            <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/apple-touch-icon-152x152.png?v=2"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon-180x180.png?v=2"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png?v=2"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/android-chrome-192x192.png?v=2"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png?v=2"
            />
            <link rel="manifest" href="/site.webmanifest?v=2" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg?v=2"
                color="#ff1744"
            />
            <link rel="shortcut icon" href="/favicon.ico?v=2" />
            <meta name="msapplication-TileColor" content="#ff1744" />
            <meta
                name="msapplication-TileImage"
                content="/mstile-144x144.png?v=2"
            />
            <meta name="theme-color" content="#ff1744" />
        </Head>
        <body className="min-h-screen overscroll-none bg-brand text-white">
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
