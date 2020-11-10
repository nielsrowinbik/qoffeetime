import { FC, HTMLProps } from "react";

// FIXME: These styles are now a direct copy-paste of LinkButton.
// FIXME: Figure out how to mach the "type" prop...

export const Button: FC<HTMLProps<HTMLButtonElement>> = ({
    children,
    type,
    ...props
}) => (
    <button {...props}>
        {children}
        <style jsx>{`
            button {
                font-family: Roboto;
                font-size: 1rem;
                font-weight: 700;
                color: #000;
                background-color: #fff;
                border: none;
                padding: 16px 0;
                margin: 0;
                border-radius: 32px;
            }
        `}</style>
    </button>
);
