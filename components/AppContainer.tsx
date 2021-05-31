export default function Container({ children }) {
    return (
        <div className="h-screen max-w-screen-sm flex flex-col mx-auto">
            <div className="overflow-x-hidden overflow-y-auto h-full">
                {children}
            </div>
        </div>
    );
}
