import Link, { LinkProps } from "next/link";
import { FC } from "react";

import { Button } from "./Button";

export const LinkButton: FC<LinkProps> = ({ href, ...props }) => (
    <Link href={href}>
        <Button {...props} />
    </Link>
);
