import styled from "styled-components";

type SectionProps = {
    scroll?: boolean;
};

export const Section = styled.section<SectionProps>`
    margin: 0 12px;
    overflow: ${({ scroll }) => (scroll ? "auto" : "unset")};
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    grid-area: main;
    margin: 0 24px;
    overflow: hidden;

    & > section:not(${Section}) + section:not(${Section}) {
        margin-top: 24px;
    }
`;
