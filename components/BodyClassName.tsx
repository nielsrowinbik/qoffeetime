import { useEffect } from 'react';

type BodyClassNameProps = {
    className?: string;
};

const BodyClassName = ({ className }: BodyClassNameProps) => {
    useEffect(() => {
        document.body.classList.add(...className.split(' '));

        return () => {
            document.body.classList.remove(...className.split(' '));
        };
    }, []);

    return null;
};

export default BodyClassName;
