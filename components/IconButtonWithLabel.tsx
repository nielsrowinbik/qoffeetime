import classNames from 'classnames';
import Icon from '@mdi/react';
import { forwardRef } from 'react';

import type { HTMLProps, ReactNode } from 'react';

type IconButtonWithLabelProps = HTMLProps<HTMLAnchorElement> &
    HTMLProps<HTMLButtonElement> & {
        href?: string;
        icon: string;
        label: ReactNode;
        type?: 'button' | 'submit' | 'reset';
    };

const IconButtonWithLabel = forwardRef<
    HTMLAnchorElement & HTMLButtonElement,
    IconButtonWithLabelProps
>(({ icon, label, ...props }, ref) => {
    const Tag = props.href ? 'a' : 'button';

    return (
        <Tag
            {...props}
            className={classNames(
                'text-black flex flex-col items-center justify-center p2 w-14'
            )}
            ref={ref}
        >
            <Icon className="m-2" path={icon} size="24px" />
            <label className="text-xs">{label}</label>
        </Tag>
    );
});

export default IconButtonWithLabel;
