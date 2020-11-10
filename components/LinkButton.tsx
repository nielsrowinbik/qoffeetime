import Link, { LinkProps } from "next/link";
import { FC } from "react";

export const LinkButton: FC<LinkProps> = ({ children, href }) => (
    <Link href={href}>
        <button>
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
    </Link>
);
