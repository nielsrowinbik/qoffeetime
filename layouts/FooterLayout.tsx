import type { PropsWithChildren } from 'react';

type FooterProps = PropsWithChildren<{}>;

const Footer = ({ children }: FooterProps) => (
    <footer className="p-4 pt-6" style={{ gridArea: 'footer' }}>
        {children}
    </footer>
);

export default Footer;
