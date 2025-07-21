import React from "react";
import type { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`rounded-full px-8 py-3 font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
