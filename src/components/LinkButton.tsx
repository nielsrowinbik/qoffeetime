import Link, { LinkProps } from "next/link";
import { FC } from "react";

import { Button } from "./Button";

export const LinkButton: FC<LinkProps> = (props) => {
    const {
        href,
        as,
        replace,
        scroll,
        shallow,
        passHref,
        prefetch,
        locale,
        ...buttonProps
    } = props;
    const linkProps = {
        href,
        as,
        replace,
        scroll,
        shallow,
        passHref,
        prefetch,
        locale,
    };

    return (
        <Link {...linkProps}>
            <Button {...buttonProps} />
        </Link>
    );
};
