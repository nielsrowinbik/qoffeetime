import styled from "styled-components";

type ButtonProps = {
    dark?: boolean;
};

export const Button = styled.button<ButtonProps>`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ dark }) => (dark ? "#fff" : "#000")};
    background-color: ${({ dark }) => (dark ? "#000" : "#fff")};
    border: none;
    padding: 16px;
    margin: 12px;
    border-radius: 32px;
`;