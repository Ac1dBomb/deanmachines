import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export default function Button({ children, onClick, className, disabled }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className || ''}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
