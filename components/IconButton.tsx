import classNames from 'classnames';
import Icon from '@mdi/react';
import { forwardRef } from 'react';

import type { HTMLProps, PropsWithChildren } from 'react';

type IconButtonProps = HTMLProps<HTMLAnchorElement> &
    HTMLProps<HTMLButtonElement> & {
        className?: string;
        href?: string;
        icon: string;
        small?: boolean;
        type?: 'button' | 'submit' | 'reset';
    };

const IconButton = forwardRef<
    HTMLAnchorElement & HTMLButtonElement,
    IconButtonProps
>(({ icon, small, ...props }, ref) => {
    const Tag = props.href ? 'a' : 'button';
    const className = classNames(
        'rounded-full text-white items-center justify-center bg-white bg-opacity-30',
        { 'p-1': !!small, 'p-2': !small },
        props.className
    );

    return (
        <Tag {...props} className={className} ref={ref}>
            <Icon path={icon} size={small ? '20px' : 1} />
        </Tag>
    );
});

export default IconButton;
