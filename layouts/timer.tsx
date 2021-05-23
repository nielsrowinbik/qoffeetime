export default function TimerLayout({ children }) {
    return (
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full min-h-full">
            <div className="prose dark:prose-dark max-w-none w-full">
                {children}
            </div>
        </article>
    );
}
