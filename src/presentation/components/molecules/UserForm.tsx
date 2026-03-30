import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

interface UserFormProps {
    name: string;
    email: string;
    setName: (val: string) => void;
    setEmail: (val: string) => void;
    onSubmit: React.SubmitEventHandler<HTMLFormElement>;
}

export const UserForm = ({ name, email, setName, setEmail, onSubmit }: UserFormProps) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center justify-center p-9 bg-background ">
            <div className="flex items-center gap-2">
                <label htmlFor="user-name">Name</label>
                <Input
                    id='user-name'
                    value={name}
                    placeholder="Ingresa tu nombre"
                    onChange={setName}
                />
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="user-email">Email</label>
                <Input
                    id='user-email'
                    value={email}
                    placeholder="Ingresa tu email"
                    onChange={setEmail}
                />
            </div>
            <Button  type='submit'>Enviar</Button>
        </form>

    )
}