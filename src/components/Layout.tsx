import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr 64px;
    grid-template-areas: "nav" "main" "footer";
    height: 100vh;
    position: relative;
`;

export const Main = styled.main`
    grid-area: main;
    margin: 0 24px;
`;

export const Section = styled.section`
    margin: 0 16px;
`;
