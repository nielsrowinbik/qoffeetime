import Icon from '@mdi/react';
import classNames from 'classnames';

interface IconButtonProps {
    href?: any; // FIXME: Explicit any
    icon: string;
    small?: boolean;
}

export default function IconButton({ icon, small, ...props }: IconButtonProps) {
    const className = classNames(
        'rounded-full rounded-full text-white items-center justify-center bg-black bg-opacity-40',
        { 'p-1': !!small, 'p-2': !small }
    );
    const Tag = props.href ? 'a' : 'button';

    return (
        <Tag {...props} className={className}>
            <Icon path={icon} size={small ? '20px' : 1} />
        </Tag>
    );
}
