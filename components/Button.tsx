import styled from "styled-components";

export const Button = styled.button`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ dark }) => (dark ? "#fff" : "#000")};
    background-color: ${({ dark }) => (dark ? "#000" : "#fff")};
    border: none;
    padding: 16px 0;
    margin: 12px;
    border-radius: 32px;
`;
