import type { PropsWithChildren } from 'react';

type FullHeightLayoutProps = PropsWithChildren<{
    align?: 'top' | 'bottom';
}>;

const FullHeightLayout = ({
    align = 'top',
    children,
}: FullHeightLayoutProps) => {
    const gridRow = align === 'top' ? 'nav / main' : 'main / footer';

    return (
        <main className="overflow-hidden" style={{ gridRow }}>
            {children}
        </main>
    );
};

export default FullHeightLayout;
