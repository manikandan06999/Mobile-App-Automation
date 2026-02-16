import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-medium transition";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-md",
    secondary:
      "border border-gray-300 hover:bg-gray-100 text-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
