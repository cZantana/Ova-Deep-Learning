// SideItem.jsx
import React from "react";

const SideItem = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-[var(--color-neutral-300)] p-3 rounded-md mb-2"
    >
      <div className="text-[var(--color-blue-800)] font-medium">
        {title}
      </div>
    </div>
  );
};

export default SideItem;