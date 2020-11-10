export const Main = ({ children }) => (
    <main>
        {children}
        <style jsx>{`
            main {
                display: flex;
                flex-direction: column;
                height: 100vh;
                width: 100%;
            }
        `}</style>
    </main>
);
