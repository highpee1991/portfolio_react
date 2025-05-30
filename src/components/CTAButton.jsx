import React from "react";

const CTAButton = ({
  text,
  onClick,
  variant = "primary",
  className = "",
  icon: Icon,
  type = "button",
  disabled = false,
}) => {
  const baseStyle =
    "cursor-pointer inline-flex items-center justify-center rounded-xl px-6 py-2 font-semibold transition-all duration-300 focus:outline-none";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-900 shadow-md",
    secondary: "bg-white text-black hover:bg-gray-100 shadow-md border",
    outline: "bg-transparent border border-black text-black hover:bg-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="mr-2 text-lg" />}
      {text}
    </button>
  );
};

export default CTAButton;
