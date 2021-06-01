export default function MainLayout({ children }) {
    return (
        <main
            className="flex flex-col px-6 overflow-hidden"
            style={{ gridArea: 'main' }}
        >
            {children}
        </main>
    );
}
