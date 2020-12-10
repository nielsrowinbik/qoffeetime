import styled from "styled-components";

export const FixedFooter = styled.footer`
    align-items: center;
    bottom: 0;
    display: flex;
    grid-area: footer;
    height: 100%;
    left: 0;
    margin: 0 12px;
    position: absolute;
    right: 0;

    & > * {
        flex: 100%;
    }
`;
