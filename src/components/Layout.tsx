import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "nav" "main" "footer";
    height: 100vh;
    padding: 0 12px;
`;
