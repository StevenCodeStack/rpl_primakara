import React from "react";
import type { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`w-fit rounded-full px-10 py-3 font-semibold text-nowrap ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
