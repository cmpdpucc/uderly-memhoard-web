import React from 'react';
import type { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
    variant = 'primary', 
    size = 'md', 
    disabled = false, 
    children, 
    className = '',
    ...props 
}) => {
    // Styles mapping (would ideally be BEM classes in SCSS, using inline for speed/prototype parity)
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
        primary: "bg-[#8A2BE2] hover:bg-[#7a25c9] text-white shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40",
        secondary: "bg-[#18181B] text-white border border-white/10 hover:bg-white/10",
        outline: "border border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white",
        ghost: "text-gray-400 hover:text-white hover:bg-white/5"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-4 text-base"
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
