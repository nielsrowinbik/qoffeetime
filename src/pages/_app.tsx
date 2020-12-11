import "typeface-montserrat";
import "typeface-roboto";
import { createGlobalStyle } from "styled-components";

import { Layout } from "../components/Layout";

const GlobalStyle = createGlobalStyle`
    html, time {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    html {
        background-color: #ff0841;
        color: #ffffff;
        height: -webkit-fill-available;
    }

    body {
        margin: 0;
        height: 100vh;
        height: -webkit-fill-available;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    h1 {
        font-family: Montserrat;
        font-size: 5rem;
        font-weight: 700;
    }

    h2 {
        font-family: Montserrat;
        font-size: 3rem;
        font-weight: 600;

    }

    h3 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    h4 {
        font-family: Montserrat;
        font-size: 1.3rem;
        font-weight: 600;
    }

    #__next {
        height: 100%;
    }
`;

const App = ({ Component, pageProps }) => (
    <>
        <GlobalStyle />
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
);

export default App;
