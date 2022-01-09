import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
    <Html lang="en" style={{ touchAction: 'none' }}>
        <Head>
            <meta charSet="utf-8" />

            {/* Favicon: */}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/assets/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/assets/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/assets/favicon/favicon-16x16.png"
            />
            <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
            <meta
                name="msapplication-config"
                content="/assets/favicon/browserconfig.xml"
            />

            <meta name="format-detection" content="telephone=no" />
            <meta name="msapplication-tap-highlight" content="no" />

            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content="DeckDeckGo" />

            <meta name="theme-color" content="#ff1744" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />
            <meta name="msapplication-TileColor" content="#ff1744" />

            <meta http-equiv="x-ua-compatible" content="IE=Edge" />

            {/* Splash screens: */}
            <link
                rel="apple-touch-startup-image"
                href="/assets/splash/launch-640x1136.png"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/assets/splash/launch-750x1334.png"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/assets/splash/launch-1242x2208.png"
                media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/assets/splash/launch-1125x2436.png"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/assets/splash/launch-1536x2048.png"
                media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/assets/splash/launch-1668x2224.png"
                media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/assets/splash/launch-2048x2732.png"
                media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
            />

            {/* Manifest: */}
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body className="min-h-screen overscroll-none bg-brand text-white">
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
