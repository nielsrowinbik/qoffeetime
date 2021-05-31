export default function NavLayout({ children }) {
    return (
        <nav
            className="flex flex-row items-center px-2"
            style={{ gridArea: 'nav' }}
        >
            {children}
        </nav>
    );
}
