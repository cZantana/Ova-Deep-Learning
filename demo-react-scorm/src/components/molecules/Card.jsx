import React  from "react";
import { useNavigate } from "react-router-dom";
import { updateLastQuiz } from '../../utils/scormManager';


const SemanaCard = ({ semana, descripcion, iconoSrc, link }) => {
    const navigate = useNavigate();
    const formatString = (str) => str.toLowerCase().replace(" ", "");
    console.log(formatString(semana));
  
    return (
      <div className="bg-[var(--color-neutral-500)] p-6 rounded-lg shadow-md max-w-sm text-LEFT hover:scale-105 transition duration-180 ease-in-out cursor-pointer" 
        onClick={() => {navigate((link))
          updateLastQuiz(`${formatString(semana)}_0`);
          refreshSCORMData();
        }}>
        {/* Imagen del icono */}
        <div className="flex justify-left mb-4">
          <img src={iconoSrc} alt={`Icono Semana ${semana}`} className="w-10 h-10" />
        </div>
  
        {/* Título de la semana */}
        <h2 className="text-lg md:text-xl font-semibold text-left text-[var(--color-blue-900)] mb-3">{semana}</h2>
  
        {/* Descripción */}
        <p className="text-[var(--color-neutral-700)] mt-2">{descripcion}</p>
  
        {/* Enlace Learn More */}
        <a
          href={link}
          className="text-[var(--color-primary)] font-semibold mt-4 inline-block hover:underline "
        >
          Learn more →
        </a>
      </div>
    );
  };
  
  export default SemanaCard;