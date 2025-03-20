// Sidebar.jsx
import React, { useState, useContext, useEffect, useRef } from "react";
import SideAccordion from "../molecules/SideAccordion";
import { updateLastQuiz } from '../../utils/scormManager';
import SCORMContext from "../../context/SCORMContext";

const Sidebar = ({ menuData, weekId, activeDocIndex, onSelectDoc }) => {

  const { refreshSCORMData } = useContext(SCORMContext);

  // Controlamos qué acordeón está expandido (solo uno a la vez)
  const initialIndex = menuData.findIndex(
    (section) => section.docIndex === activeDocIndex
  );
  const [expandedSection, setExpandedSection] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  useEffect(() => {
    const newIndex = menuData.findIndex(
      (section) => section.docIndex === activeDocIndex
    );
    if (newIndex >= 0) {
      setExpandedSection(newIndex);
    }
  }, [activeDocIndex, menuData]);

  // Estado para mostrar/ocultar el sidebar en mobile
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  // Cierra el sidebar si se hace clic fuera de él (solo en mobile)
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Función para hacer scroll a una posición porcentual del documento
  const scrollToSection = (position) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTo = ((position) / 100) * scrollHeight;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  return (
    <>
      {/* Botón flotante para mobile: visible solo en pantallas menores a md */}
      <div className="md:hidden fixed left-2 top-16 z-50 py-5">
        {!isOpen && (
          <button
            className="bg-[var(--color-neutral-300)] p-2 rounded-full shadow-xl"
            onClick={() => setIsOpen(true)}
          >
            {/* Icono de menú (hamburguesa) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        )}
      </div>

      {/* Sidebar:
            - En mobile: posición fija, ancho 50% y se desplaza desde la izquierda.
            - En pantallas md en adelante: se muestra de forma estática con ancho fijo.
      */}
      <div
        ref={sidebarRef}
        onClick={(e) => e.stopPropagation()}
        className={`bg-[var(--color-neutral-300)] p-0 w-0 transition-all duration-300 w-64 z-40 fixed h-[calc(100vh-64px)] md:sticky top-16 max-h-[calc(100vh-64px)] overflow-y-auto
          ${isOpen ? "translate-x-0 w-1/2" : "translate-x-[-100%]"}
           md:translate-x-0 md:w-48 lg:w-64 xl:w-96`}
      >
        {menuData.map((section, index) => (
          <SideAccordion
            key={index}
            title={section.title}
            items={section.items}
            expanded={expandedSection === index}
            // Controla la apertura/cierre del acordeón
            onChange={(event, isExpanded) => {
              setExpandedSection(isExpanded ? index : -1);
            }}
            // Al hacer clic en el header del acordeón, se notifica para cambiar el documento
            onAccordionClick={() => {
              onSelectDoc(section.docIndex);
              setTimeout(() => {
                scrollToSection(0);
                updateLastQuiz(`${weekId}_${index}`);
                console.log(`${weekId}_${index}`);
                refreshSCORMData();
              }, 500);

              // En mobile, al seleccionar se cierra el sidebar
              setIsOpen(True);
            }}
            onItemClick={(position) => scrollToSection(position)}
          />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
