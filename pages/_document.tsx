import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/assets/icons/apple-touch-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/assets/icons/apple-touch-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/assets/icons/apple-touch-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/assets/icons/apple-touch-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/assets/icons/apple-touch-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/assets/icons/apple-touch-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/assets/icons/apple-touch-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/assets/icons/apple-touch-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/assets/icons/apple-touch-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/assets/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="194x194"
                        href="/assets/icons/favicon-194x194.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/assets/icons/android-chrome-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/assets/icons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/assets/icons/safari-pinned-tab.svg"
                        color="#ffffff"
                    />
                    <meta
                        name="description"
                        content="Create the perfect cup of coffee using one of Brewtime's many built-in recipies."
                    />
                    <meta name="msapplication-TileColor" content="#383c43" />
                    <meta
                        name="msapplication-TileImage"
                        content="/assets/icons/mstile-144x144.png"
                    />
                    <meta name="theme-color" content="#ff1744" />
                </Head>
                <body className="min-h-screen bg-brewtime-red text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
