export default function Footer({ children }) {
    return (
        <footer
            className="flex flex-row items-start px-4"
            style={{ gridArea: 'footer' }}
        >
            {children}
        </footer>
    );
}
