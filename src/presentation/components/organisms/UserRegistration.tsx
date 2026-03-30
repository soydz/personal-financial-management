"use client";

import { addUserUseCase } from "@/core/application/use-cases/AddUser";
import { useEffect, useState } from "react";
import { UserForm } from "../molecules/UserForm";
import { User } from "@/core/domain/entities/User";

export const UserRegistration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [lastUser, setLastUser] = useState<User | null>(null);

    useEffect(() => {
        if (lastUser) {
            const timer = setTimeout(() => {
                setLastUser(null);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [lastUser]);

    const handleRegister: React.SubmitEventHandler<HTMLFormElement> = (e) => {
        if (name.trim() == '' || email.trim() == '') return;
        e.preventDefault();
        setLastUser(addUserUseCase(name, email));

        setName('');
        setEmail('');
    }

    return (
        <section>
            <h2 className="text-2xl font-bold text-gray-800 text-center dark:text-white">
                Registro de Usuario - Gestión Financiera
            </h2>
            <UserForm
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
                onSubmit={handleRegister}
            />

            {lastUser && (
                <div className="flex flex-col gap-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
                    <p className="font-bold">¡Usuario Creado!</p>
                    <p>Nombre: {lastUser?.name}</p>
                    <p>Email: {lastUser?.email}</p>
                    <p className="text-xs italic">Creado el: {lastUser?.createdAt.toLocaleString()}</p>
                </div>
            )}

        </section>
    )
}