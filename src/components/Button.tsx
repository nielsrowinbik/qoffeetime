import { FC, forwardRef, HTMLProps, ReactElement } from "react";
import styled from "styled-components";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
    dark?: boolean;
    icon?: ReactElement;
    type?: "button" | "submit" | "reset";
    variant?: "small" | "large";
};

export const Button = styled.button<ButtonProps>`
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
`;

export type IconButtonProps = ButtonProps & {
    icon: ReactElement;
};

const UnstyledIconButton: FC<IconButtonProps> = forwardRef(
    ({ as, children, icon, ref, ...props }, forwardedRef) => (
        <Button ref={forwardedRef} {...props}>
            {icon}
            {children}
        </Button>
    )
);

export const IconButton = styled(UnstyledIconButton)`
    & > :first-child {
        margin-right: 6px;
    }
`;
