import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  showArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700",
    outline: "bg-transparent text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};