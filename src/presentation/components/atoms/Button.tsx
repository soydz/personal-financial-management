interface ButtonProps {
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
    children: React.ReactNode;
}


export const Button = ({ onClick, type, children }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 py-2"
        >
            {children}
        </button>
    )
};