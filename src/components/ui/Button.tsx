import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, ...props }) => {
  const baseStyles = "w-full flex items-center justify-center space-x-2 font-semibold py-3.5 rounded-xl transition-colors focus:ring-4 text-sm";
  const variants = {
    primary: "bg-[#059669] text-white hover:bg-[#047857] focus:ring-[#D1FAE5]",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-200"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      <span>{children}</span>
      {icon && <div className="text-current">{icon}</div>}
    </button>
  );
};