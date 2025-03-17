import React from "react";

const Button = ({
  text,
  type = "primary",
  size = "md",
  icon = null,
  iconPosition = "right",
  loading = false,  
  disabled = false,
  onClick,
  ...props
}) => {
  // Clases base comunes para todos los botones
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition duration-300 focus:outline-none";

  // Definir variantes (colores)
  let variantClasses = "";
  if (type === "primary") {
    variantClasses =
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-pink-800)] focus:ring-2 focus:ring-[var(--color-pink-500)]";
  } else if (type === "secondary") {
    variantClasses =
      "border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-pink-500)] hover:text-white focus:ring-2 focus:ring-[var(--color-pink-500)]";
  } else if (type === "tertiary") {
    variantClasses =
      "bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white";
  }

  // TamaÃ±os
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  // Estado Loading
  let loadingClasses = loading
    ? "relative pointer-events-none opacity-70"
    : "";
  let disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "";

  // Clases para iconos
  let iconClasses = "";
  if (icon) {
    iconClasses =
      iconPosition === "left"
        ? "flex flex-row gap-2"
        : "flex flex-row-reverse gap-2";
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses[size]} ${iconClasses} ${loadingClasses} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
      )}
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {text}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;