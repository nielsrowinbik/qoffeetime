import styled from "styled-components";

type ButtonProps = {
    dark?: boolean;
};

export const Button = styled.button<ButtonProps>`
    background-color: ${({ dark }) => (dark ? "#000" : "#fff")};
    border: none;
    border-radius: 32px;
    color: ${({ dark }) => (dark ? "#fff" : "#000")};
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;
    padding: 14px;
`;
