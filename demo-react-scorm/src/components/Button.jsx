// src/components/Button.jsx
import React from 'react';

const Button = ({ text, type = "primary", onClick, ...props }) => {
  // Clases base comunes para todos los botones
  const baseClasses = "py-2 px-4 rounded font-semibold transition duration-200 focus:outline-none";

  // Definición de variantes usando las variables globales
  let variantClasses = "";
  if (type === "primary") {
    variantClasses = "bg-[var(--color-primary)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:opacity-90";
  } else if (type === "secondary") {
    variantClasses = "bg-[var(--color-secondary)] text-[var(--color-primary)] border border-[var(--color-border)] hover:bg-[var(--color-secondary)] hover:opacity-90";
  } else if (type === "tertiary") {
    variantClasses = "bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text)]";
  }

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;
