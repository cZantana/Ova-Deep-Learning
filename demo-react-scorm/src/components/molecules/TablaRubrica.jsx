import React from "react";

const TablaRubrica = ({ title, subtitle, maxScore, rubricData }) => {
  return (
    <div className="overflow-x-auto p-4 ">
      {/* Encabezado de la rúbrica */}
      <div className="text-center">
        {title && (
          <div className="text-xl mx-2 font-sans rounded-t-xl font-bold text-[var(--color-pink-700)] mb-2 bg-[var(--color-pink-100)] py-5 ">
            {title}
          </div>
        )}
        {subtitle && (
            <div className="bg-[var(--color-gray-100)] px-10 py-5 mx-2">
                <h3 className="text-lg font-sans my-0! font-semibold text-left text-[var(--color-pink-600)]">
                    {subtitle}
                </h3>
                <p className="text-left font-sans text-lg font-semibold text-[var(--color-pink-600)]">
                    Máxima calificación: {maxScore}
                </p>
            </div>
        )}
      </div>

      {/* Tabla con los criterios a la izquierda y rangos a la derecha */}
      <table className="table-auto w-full border border-black">
  <tbody>
    {rubricData.map((criterion, index) => (
      <tr key={index} className="border border-white border-8 h-full">
        {/* Columna izquierda: criterios */}
        <td className="w-1/2 bg-[var(--color-gray-100)] p-8 border-8 border-white h-full">
          <div className="grid place-content-center h-full">
            <div className="text-[var(--color-gray-600)] text-lg font-bold mb-2 text-left">
              {criterion.criteriaTitle}
            </div>
            <p className="mb-3 text-[var(--color-neutral-900)] text-left">
              {criterion.description}
            </p>
            {criterion.note && (
              <p className="text-[var(--color-pink-600)] font-medium text-left">
                {criterion.note}
              </p>
            )}
          </div>
        </td>

        {/* Columna derecha: rangos */}
        <td className="w-1/2 p-8 bg-[var(--color-gray-100)] border-8 border-white h-full">
          <div className="grid place-content-center h-full">
            {criterion.ranges.map((rangeItem, rIndex) => (
              <div key={rIndex} className="mb-4 text-left">
                <p className="font-semibold text-[var(--color-pink-600)] mb-1">
                  {rangeItem.rating}
                </p>
                <p className="text-[var(--color-neutral-900)]">
                  {rangeItem.description}
                </p>
              </div>
            ))}
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default TablaRubrica;
