import React from "react";

const TemaItem = ({ title, status, score }) => {
  return (
    <div className="bg-[var(--color-neutral-300)] p-3 rounded-md flex items-center justify-between mb-2">
      <div>
        <div className="text-[var(--color-blue-800)] font-medium">
          {title}
        </div>
        <div className="text-[var(--color-neutral-700)] text-sm">
          {status}
        </div>
      </div>
      {score && (
        <div className="text-[var(--color-primary)] font-bold text-md ml-10">
          {score}
        </div>
      )}
    </div>
  );
};

export default TemaItem;
