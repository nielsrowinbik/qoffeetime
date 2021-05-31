export default function Button({ children, ...props }) {
    return (
        <button
            className="bg-white text-black font-semibold w-full py-3 rounded-lg inline-flex justify-center align-center
                 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed relative,
                 overflow-hidden outline-none"
            {...props}
        >
            {children}
        </button>
    );
}
