import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  topElement?: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({ children, title, description, topElement }) => {
  return (
    <div className="min-h-screen bg-[#F0FDF4] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-[480px] flex flex-col items-center">
        {topElement}
        <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-2">{title}</h2>
        <p className="text-gray-500 text-center text-sm mb-8 max-w-[340px]">{description}</p>
        {children}
      </div>
    </div>
  );
};