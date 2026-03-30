interface InputProps {
    value: string;
    placeholder: string;
    id: string;
    onChange: (val: string) => void;
}

export const Input = ({ value, placeholder, id, onChange }: InputProps) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="border p-2 rounded-md mr-2 text-black dark:border-white dark:text-white"
        />
    )
};