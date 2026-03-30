import { User } from "@/core/domain/entities/User";

export const addUserUseCase = (name: string, email: string): User => {

    if (!name.trim() || !email.trim()) {
        throw new Error('El nombre y el email son obligatorios');
    }

    return { name: name.trim(), email: email.trim(), createdAt: new Date() };
};