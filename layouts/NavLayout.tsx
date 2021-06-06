import type { PropsWithChildren } from 'react';

type NavLayoutProps = PropsWithChildren<{}>;

const NavLayout = ({ children }: NavLayoutProps) => (
    <nav
        className="flex flex-row items-center px-2"
        style={{ gridArea: 'nav' }}
    >
        {children}
    </nav>
);

export default NavLayout;
