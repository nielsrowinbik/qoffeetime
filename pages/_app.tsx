import "typeface-montserrat";
import "typeface-roboto";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        background-color: #ff0841;
        color: #ffffff;
        font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    time {
        font-family: Roboto;
    }
`;

const theme = {
    colors: {
        primary: "#0070f3",
    },
};

const App = ({ Component, pageProps }) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
);

export default App;
