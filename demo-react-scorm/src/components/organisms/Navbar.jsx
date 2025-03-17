import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[var(--color-neutral-300)] text-[var(--color-neutral-900)] border-b border-[var(--color-neutral-400)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo o nombre del sitio */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-blue-500)]"
            >
              DeepLearning
            </Link>
          </div>

          {/* Botón hamburguesa (vista móvil) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-[var(--color-neutral-900)] hover:text-[var(--color-primary)] focus:outline-none focus:text-[var(--color-primary)]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menú principal (vista escritorio) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/Notas"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Notas
            </Link>
            <Button
              text="Continuar →"
              type="secondary"
              onClick={() => navigate("/notas")}
            />
          </div>
        </div>
      </div>

      {/* Menú desplegable (vista móvil) */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col bg-[var(--color-neutral-300)]">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md hover:text-[var(--color-primary)]"
            >
              Inicio
            </Link>
            <Link
              to="/Notas"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md hover:text-[var(--color-primary)]"
            >
              Notas
            </Link>
            <div className="px-3 py-2">
              <Button
                text="Continuar"
                type="secondary"
                onClick={() => {
                  navigate("/continuar");
                  toggleMenu();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
