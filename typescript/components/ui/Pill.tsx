// components/ui/Pill.tsx
import React from "react";

type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  const base = "px-3 py-1 rounded-full text-sm cursor-pointer border";
  const classes = active
    ? `${base} border-indigo-600 bg-indigo-50 text-indigo-700`
    : `${base} border-gray-200 text-gray-700`;

  return (
    <button aria-pressed={active} onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default Pill;

