declare module "next/link" {
    import { ReactNode } from "react";
    import { UrlObject } from "url";
    type Url = string | UrlObject;

    type LinkProps = {
        href: Url;
        as?: Url;
        replace?: boolean;
        scroll?: boolean;
        shallow?: boolean;
        passHref?: boolean;
        prefetch?: boolean;
        locale?: string | false;
    };

    function Link(props: LinkProps & { children?: ReactNode }): any;

    export = Link;
    export { LinkProps };
}
