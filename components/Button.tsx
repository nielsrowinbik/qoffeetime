import { forwardRef } from 'react';
import Icon from '@mdi/react';

// TODO: Clean up typescript support for props

const Button = forwardRef(({ children, ...props }, ref) => {
    const Tag = props.href ? 'a' : 'button';
    return (
        <Tag
            className="bg-white text-black font-semibold w-full py-3 first:rounded-l-lg first:rounded-r-none last:rounded-r-lg last:rounded-l-none only:rounded-lg inline-flex justify-center align-center
                 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed relative,
                 overflow-hidden outline-none"
            {...props}
            ref={ref as any} // Explicit 'any' needed, see https://github.com/mui-org/material-ui/issues/24901 and https://github.com/microsoft/TypeScript/issues/30748
        >
            {props.icon && (
                <Icon className="mr-2" path={props.icon} size="24px" />
            )}
            {children}
        </Tag>
    );
});

export default Button;
