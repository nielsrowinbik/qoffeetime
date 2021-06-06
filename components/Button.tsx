import classNames from 'classnames';
import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import type { HTMLProps, PropsWithChildren, ReactElement } from 'react';
import Icon from '@mdi/react';

type ButtonProps = PropsWithChildren<
    HTMLProps<HTMLAnchorElement> &
        HTMLProps<HTMLButtonElement> & {
            href?: string;
            icon?: string;
            inGroup?: boolean;
            type?: 'button' | 'submit' | 'reset';
            variant?: 'dark' | 'light' | 'text';
        }
>;

const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
    ({ children, inGroup = false, variant = 'light', ...props }, ref) => {
        const className = classNames(
            'font-semibold w-full py-3 inline-flex justify-center align-center disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed relative overflow-hidden outline-none',
            {
                'rounded-lg': !inGroup,
                'first:rounded-l-lg first:rounded-r-none last:rounded-r-lg last:rounded-l-none only:rounded-lg':
                    inGroup,
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
    <div className="flex flex-row">
        {Children.map(children, (child) => {
            if (isValidElement(child))
                return cloneElement(child, { inGroup: true });
            return child;
        })}
    </div>
);

export default Button;
export { ButtonGroup };
