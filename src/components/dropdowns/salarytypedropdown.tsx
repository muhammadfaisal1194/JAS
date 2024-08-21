import React, { useEffect, useRef } from "react";
import Salarytype from "@/data/salarytype.json";

interface SalarytypesProps {
  salarytype: boolean;
  setSalarytype: React.Dispatch<React.SetStateAction<boolean>>;
}

const Salarytypes: React.FC<SalarytypesProps> = ({
  salarytype,
  setSalarytype,
}) => {
  const catsalarytype = useRef<HTMLDivElement | null>(null);

  const closeOpenMenus1 = (e: MouseEvent) => {
    if (
      salarytype &&
      catsalarytype.current &&
      !catsalarytype.current.contains(e.target as Node)
    ) {
      setSalarytype(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus1);

    return () => {
      document.removeEventListener("mousedown", closeOpenMenus1);
    };
  }, [salarytype]);

  const toggleDropdown1 = () => {
    setSalarytype(!salarytype);
  };

  return (
    <div>
      <div ref={catsalarytype} className="relative">
        <button
          type="button"
          className="gap-4 w-[270px] border px-2 rounded-md border-gray-400 p-3 text-gray-400 bg-white font-medium text-sm inline-flex items-center"
          onClick={toggleDropdown1}
        >
          Select...
        </button>

        {salarytype && (
          <div className="absolute mt-2 z-10 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="relative p-2 w-full text-sm grid gap-1">
              {Salarytype.map((salary) => (
                <li
                  className="p-2 hover:bg-gray-100 list-none"
                  key={salary.type}
                >
                  {salary.type}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Salarytypes;
