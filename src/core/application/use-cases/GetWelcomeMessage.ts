import { User, UserDTO } from '@/core/domain/entities/User';

export interface WelcomeMessageDTO {
  message: string;
  user: UserDTO;
}

export class GetWelcomeMessageUseCase {
  execute(user: User): WelcomeMessageDTO {

    return {
      message: `Bienvenido a Gestión Financiera Personal, ${user.name}!`,
      user: {
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt.toISOString()),
      },
    };
  }
}
