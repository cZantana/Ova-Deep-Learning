import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[var(--color-neutral-300)] text-[var(--color-neutral-900)] border-b border-[var(--color-neutral-400)] sticky top-0 z-999">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16">
          {/* Título del sitio */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-blue-500)]">
              DeepLearning
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
