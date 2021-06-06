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
            variant?: 'dark' | 'light' | 'text';
        }
>;

const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'light', ...props }, ref) => {
        const className = classNames(
            'font-semibold w-full py-3 first:rounded-l-lg first:rounded-r-none last:rounded-r-lg last:rounded-l-none only:rounded-lg inline-flex justify-center align-center disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed relative overflow-hidden outline-none',
            {
                'bg-white text-black': variant === 'light',
                'bg-black text-white': variant === 'dark',
                'text-current': variant === 'text',
            },
            props.className
        );
        const Tag = props.href ? 'a' : 'button';
        return (
            <Tag {...props} className={className} ref={ref}>
                {props.icon && (
                    <Icon className="mr-2" path={props.icon} size="24px" />
                )}
                {children}
            </Tag>
        );
    }
);

type ButtonGroupProps = PropsWithChildren<{}>;

const ButtonGroup = ({ children }: ButtonGroupProps) => (
    <div className="flex flex-row">{children}</div>
);

export default Button;
export { ButtonGroup };
