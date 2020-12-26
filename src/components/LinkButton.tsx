import Link, { LinkProps } from "next/link";
import { FC } from "react";

import { Button, ButtonProps } from "./Button";

export type LinkButtonProps = ButtonProps & LinkProps;

export const LinkButton: FC<LinkButtonProps> = (props) => {
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
