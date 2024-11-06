export const Button = ({ active, children, ...props }: any) => (
    <button
        type="button"
        {...props}
        className={`mr-2 px-2 py-4 text-l font-bold border-none ${active ? ' text-black font-extrabold' : 'text-gray-500'}   `}
    >
        {children}
    </button>
)
