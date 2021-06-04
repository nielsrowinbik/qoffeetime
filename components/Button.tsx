import classNames from 'classnames';
import { forwardRef } from 'react';
import Icon from '@mdi/react';

import type { HTMLProps, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<
    HTMLProps<HTMLAnchorElement> &
        HTMLProps<HTMLButtonElement> & {
            href?: string;
            icon?: string;
            type?: 'button' | 'submit' | 'reset';
            variant?: 'light' | 'dark';
        }
>;

const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'light', ...props }, ref) => {
        const className = classNames(
            'font-semibold w-full py-3 first:rounded-l-lg first:rounded-r-none last:rounded-r-lg last:rounded-l-none only:rounded-lg inline-flex justify-center align-center disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed relative overflow-hidden outline-none',
            {
                'bg-white text-black': variant === 'light',
                'bg-black text-white': variant === 'dark',
            }
        );
        const Tag = props.href ? 'a' : 'button';
        return (
            <Tag className={className} {...props} ref={ref}>
                {props.icon && (
                    <Icon className="mr-2" path={props.icon} size="24px" />
                )}
                {children}
            </Tag>
        );
    }
);

export default Button;
