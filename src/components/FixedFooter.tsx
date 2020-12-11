import styled from "styled-components";

export const FixedFooter = styled.footer`
    align-items: center;
    display: flex;
    grid-area: footer;
    margin: 0 12px;

    & > * {
        flex: 100%;
    }
`;
