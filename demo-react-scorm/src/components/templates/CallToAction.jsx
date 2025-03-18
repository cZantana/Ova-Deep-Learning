import React, {useContext} from "react";
import Button from "../atoms/Button";
import SCORMContext from "../../context/SCORMContext";
import quizzesConfig from '../../config/Quizzes';
import { useNavigate } from "react-router-dom";


const CallToAction = () => {
  const navigate = useNavigate();  
  const { scormStatus, lastQuiz } = useContext(SCORMContext);
  const quizConfig = quizzesConfig.find(q => q.id === lastQuiz);

  return (
    <section className="bg-[var(--color-neutral-400)] py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Columna de texto */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[var(--color-neutral-900)]">
          {lastQuiz && quizConfig ? (
        <p>Continuar Con: {quizConfig.title}</p>
      ) : (
        <p>Aún no has realizado ninguna actividad.</p>
      )}
          </h2>
          {/* Si quieres añadir una breve descripción, descomenta: 
          <p className="mt-4 text-[var(--color-neutral-700)]">
            Una breve descripción de lo que se tratará en esta sesión.
          </p> 
          */}
          <div className="mt-6">
            <Button 
              text={lastQuiz ? (
                <p>Continuar</p>
              ) : (
                <p>Empezar viaje</p>
              )} 
              type="tertiary" 
              onClick={() => navigate(lastQuiz ? (
                quizConfig.route
              ) : (
                ""
              ))} 
            />
          </div>
        </div>

        {/* Columna de imagen */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="w-80 h-52 bg-[var(--color-neutral-300)] rounded-lg flex items-center justify-center">
            <span className="text-[var(--color-neutral-600)]">[Imagen]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
