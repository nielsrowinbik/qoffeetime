import type { PropsWithChildren } from 'react';

type FooterProps = PropsWithChildren<{}>;

const Footer = ({ children }: FooterProps) => (
    <footer className="px-4" style={{ gridArea: 'footer' }}>
        {children}
    </footer>
);

export default Footer;
