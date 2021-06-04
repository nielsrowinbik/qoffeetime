import { useRouter } from 'next/router';
import { Children, cloneElement } from 'react';

const GoBack = ({ children }) => {
    const router = useRouter();
    const onClick = () => router.back();

    return cloneElement(Children.only(children), { onClick });
};

export default GoBack;
