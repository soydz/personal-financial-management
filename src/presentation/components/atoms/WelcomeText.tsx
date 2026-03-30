import React from 'react';

interface WelcomeTextProps {
  message: string;
}

export const WelcomeText: React.FC<WelcomeTextProps> = ({ message }) => {
  return (
    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
      {message}
    </h1>
  );
};
