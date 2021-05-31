import classNames from 'classnames';
import Icon from '@mdi/react';
import { forwardRef } from 'react';

interface IconButtonProps {
    href?: any; // FIXME: Explicit any
    icon: string;
    small?: boolean;
}

const IconButton = forwardRef(
    ({ icon, small, ...props }: IconButtonProps, ref) => {
        const Tag = props.href ? 'a' : 'button';

        return (
            <Tag
                {...props}
                className={classNames(
                    'rounded-full rounded-full text-white items-center justify-center bg-black bg-opacity-40',
                    { 'p-1': !!small, 'p-2': !small }
                )}
                ref={ref as any} // Explicit 'any' needed, see https://github.com/mui-org/material-ui/issues/24901 and https://github.com/microsoft/TypeScript/issues/30748
            >
                <Icon path={icon} size={small ? '20px' : 1} />
            </Tag>
        );
    }
);

export default IconButton;
