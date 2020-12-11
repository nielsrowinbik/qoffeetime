import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    grid-area: main;
    margin: 0 24px;
    overflow: hidden;
`;

type SectionProps = {
    scroll?: boolean;
};

export const Section = styled.section<SectionProps>`
    margin: 0 16px;
    overflow: ${({ scroll }) => (scroll ? "auto" : "unset")};
`;
