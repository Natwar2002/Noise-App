export default function Auth({ children }) {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="md:h-auto md:w-[450px] border-none p-5">
                {children}
            </div>
        </div>
    );
}