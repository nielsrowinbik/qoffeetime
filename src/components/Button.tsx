import { FC, forwardRef, HTMLProps, ReactElement } from "react";
import styled from "styled-components";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
    dark?: boolean;
    icon?: ReactElement;
    type?: "button" | "submit" | "reset";
    variant?: "small" | "large";
};

const UnstyledButton: FC<ButtonProps> = forwardRef(
    ({ children, icon, ...props }, ref) => (
        <button {...props} ref={ref}>
            {icon}
            {children}
        </button>
    )
);

export const Button = styled(UnstyledButton)`
    align-items: center;
    background-color: ${({ dark, variant }) =>
        variant === "large" ? (dark ? "#000" : "#fff") : "#ff1744"};
    border: none;
    border-radius: 32px;
    color: ${({ dark, variant }) =>
        dark || variant !== "large" ? "#fff" : "#000"};
    display: flex;
    flex-direction: row;
    font-size: ${({ variant }) => (variant === "large" ? "1rem" : "0.8rem")};
    font-weight: ${({ variant }) => (variant === "large" ? 700 : 500)};
    justify-content: center;
    line-height: 1rem;
    padding: ${({ variant }) => (variant === "large" ? "14px" : "6px 14px")};

    & > :first-child {
        margin-right: 6px;
    }
`;
