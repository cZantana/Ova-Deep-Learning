import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[var(--color-neutral-300)] text-[var(--color-neutral-900)] border-b border-[var(--color-neutral-400)] sticky top-0 z-999">
      <div className="flex items-center justify-start h-16 ">
            <span className="px-6 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-blue-500)]">
              DeepLearning
            </span>
      </div>
    </nav>
  );
};

export default Navbar;
