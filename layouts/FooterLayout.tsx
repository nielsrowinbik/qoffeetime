export default function Footer({ children }) {
    return (
        <footer
            className="flex flex-row items-center px-4"
            style={{ gridArea: 'footer' }}
        >
            {children}
        </footer>
    );
}
