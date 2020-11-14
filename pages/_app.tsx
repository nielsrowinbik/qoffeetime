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
    }

    body {
        margin: 0;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family: Montserrat;
        font-weight: 600;
    }

    h1 {
        
        font-size: 5rem;
    }

    h2 {
        font-size: 3rem;

    }

    h3 {
        font-size: 1.8rem;
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
