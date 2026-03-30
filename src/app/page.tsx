//import { User } from '@/core/domain/entities/User';
//import { GetWelcomeMessageUseCase } from '@/core/application/use-cases/GetWelcomeMessage';
//import { WelcomeText } from '@/presentation/components/atoms/WelcomeText';
import { UserRegistration } from '@/presentation/components/organisms/UserRegistration';

export default function Home() {
  /*
  const currentUser: User = {
    name: 'Sofia',
    email: 'usuario@ejemplo.com',
    createdAt: new Date(),
  };
  */

  //const welcomeMessageUseCase = new GetWelcomeMessageUseCase();
  //const { message, user } = welcomeMessageUseCase.execute(currentUser);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background]">
      {/*
        <WelcomeText message={message} />
      */}

      <UserRegistration />
    </main>
  );
}
