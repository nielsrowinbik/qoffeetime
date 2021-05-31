const FullHeightLayout = ({ children }) => (
    <main className="overflow-hidden" style={{ gridRow: 'nav / main' }}>
        {children}
    </main>
);

export default FullHeightLayout;
