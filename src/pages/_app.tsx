import "typeface-montserrat";
import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
    html, time {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    html {
        background-color: #ff1744;
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
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 64px 1fr 64px;
        grid-template-areas: "nav" "main" "footer";
        height: 100%;
    }
`;

const updateHeight = () => {
    document.body.style.height = `${window.innerHeight}px`;
};

const App = ({ Component, pageProps }) => {
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
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
};

export default App;
