import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html className="overscroll-none" lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/assets/icons/apple-touch-icon.png"
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
                        sizes="16x16"
                        href="/assets/icons/favicon-16x16.png"
                    />
                    <link
                        rel="mask-icon"
                        href="/assets/icons/safari-pinned-tab.svg"
                        color="#ff1744"
                    />
                    <link
                        rel="shortcut icon"
                        href="/assets/icons/favicon.ico"
                    />
                    <meta name="msapplication-TileColor" content="#ff1744" />
                    <meta
                        name="msapplication-config"
                        content="/browserconfig.xml"
                    />
                    <meta
                        name="description"
                        content="Create the perfect cup of coffee using one of Brewtime's many built-in recipies."
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
