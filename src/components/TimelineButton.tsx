import Link, { LinkProps } from "next/link";
import { FC } from "react";
import styled from "styled-components";

import { Button } from "./Button";

const SmallButton = styled(Button)`
    background-color: #ff1744;
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 6px 14px;
`;

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin: 40px;
`;

export const TimelineButton: FC<LinkProps> = (props) => {
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
        <Container>
            <Link {...linkProps}>
                <SmallButton {...buttonProps} />
            </Link>
        </Container>
    );
};
