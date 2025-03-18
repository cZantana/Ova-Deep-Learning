import React, { useContext } from "react";
import Button from "../atoms/Button";
import SCORMContext from "../../context/SCORMContext";
import { useNavigate } from "react-router-dom";
import { quizzes } from '../../config/Quizzes';


const HeroSection = () => {
  const { scormStatus, lastQuiz } = useContext(SCORMContext);
  const navigate = useNavigate();
  const quizConfig = quizzes.find(q => q.id === lastQuiz);

  return (
    <section className="hero-section min-h-screen flex items-center bg-[url(/src/assets/IlustracionCurso.jpg)] bg-cover lg:bg-[center_left]">
      <div className="max-w-6xl mx-auto lg:ml-[calc(100vw/9)] px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between ">
        {/* Contenido del Hero */}
        <div className="text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-900)] leading-tight">
            Más que un curso: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-blue-500)]">
              Una experiencia inmersiva en Deep Learning.
            </span>
          </h1>
          <p className="text-[var(--color-neutral-700)] mt-4 text-lg">
            Disfruta de un curso interactivo de Deep Learning con contenido
            multimedia, actividades semanales y evaluación automática en tiempo
            real, para el aprendizaje autónomo.
          </p>
          <div className="mt-6 md:flex space-x-4">
            <Button
              text={lastQuiz ? (
                <p>Empieza tu viaje</p>
              ) : (
                <p>Empieza tu viaje</p>
              )}
              type="primary"
              onClick={() => navigate(lastQuiz ? (
                quizConfig.route
              ) : (
                "quiz1"
              ))}
            // className="bg-[var(--color-neutral-500)] hover:bg-[var(--color-neutral-600)] text-[var(--color-neutral-900)] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            />
          </div>
          {/* Estado de SCORM */}
          <div className="mt-4">
            <p
              className={`text-sm font-bold ${scormStatus === "SCORM inicializado correctamente"
                  ? "text-[var(--color-success)]"
                  : "text-[var(--color-error)]"
                }`}
            >
              {scormStatus}
            </p>
          </div>
        </div>

        {/* Imagen o ilustración */}
        {/* <div className="hidden md:block">
          <img
            src={Image1} // Cambia por la imagen correcta
            alt="Ilustración del curso"
            className="w-80 h-auto object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;