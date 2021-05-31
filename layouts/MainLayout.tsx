export default function MainLayout({ children }) {
    return (
        <main className="px-2" style={{ gridArea: 'main' }}>
            {children}
        </main>
    );
}
