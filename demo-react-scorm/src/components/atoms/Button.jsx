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
  // Base classes common for all buttons
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition duration-300 focus:outline-none";

  // Define color variants
  let variantClasses = "";
  if (type === "primary") {
    variantClasses =
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-pink-800)] focus:ring-2 focus:ring-[var(--color-pink-500)]";
  } else if (type === "secondary") {
    variantClasses =
      "transition-all bg-[var(--color-primary)] border-0 border-[var(--color-primary)] text-[var(--color-neutral-300)] hover:bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-blue-500)] hover:text-white focus:ring-2 focus:ring-[var(--color-pink-500)]";
  } else if (type === "tertiary") {
    variantClasses =
      "bg-transparent border-1 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white";
  }

  // Sizes
  const sizeClasses = {
    sm: "py-1 px-4 text-sm",
    md: "py-1.5 px-6 text-base",
    lg: "py-3 px-8 text-lg",
  };

  // Loading state
  let loadingClasses = loading
    ? "relative pointer-events-none opacity-70"
    : "";
  let disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "";

  // Icon classes
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
      <span className="sm:text-md md:text-lg font-medium">{text}</span>
      {icon && iconPosition === "right" && <span className="text-xl">{icon}</span>}
    </button>
  );
};

export default Button;