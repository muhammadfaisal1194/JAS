import React, { useEffect, useRef, useState } from "react";
import Jobcategorys from "@/data/jobcategorys.json";

interface SalarytypesProps {
  jobcategory: boolean;
  setJobcategory: React.Dispatch<React.SetStateAction<boolean>>;
}

const Jobcategory: React.FC<SalarytypesProps> = ({
  jobcategory,
  setJobcategory,
}) => {
  const catjobcategory = useRef<HTMLDivElement | null>(null);

  const closeOpenMenus1 = (e: MouseEvent) => {
    if (
      jobcategory &&
      catjobcategory.current &&
      !catjobcategory.current.contains(e.target as Node)
    ) {
      setJobcategory(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus1);

    return () => {
      document.removeEventListener("mousedown", closeOpenMenus1);
    };
  }, [jobcategory]);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  console.log(value);
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const toggleDropdown2 = () => {
    setJobcategory(!jobcategory);
  };
  const filteredCategories = Jobcategorys.filter((category) => {
    const abc = category.category === value;
    return abc;
  });
  // console.log(abc);
  console.log(filteredCategories);
  return (
    <div>
      <div ref={catjobcategory} className="relative">
        <input
          type="text"
          className="gap-4 w-[270px] border px-2 rounded-md border-gray-400 p-3 bg-white font-medium text-sm inline-flex items-center"
          onClick={toggleDropdown2}
          value={value}
          onChange={handleChange}
          placeholder="Job category"
        />

        {jobcategory && (
          <div className="absolute mt-2 h-80 overflow-auto z-10 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="relative p-2 w-full text-sm grid gap-1">
              {Jobcategorys.map((item) => (
                <li
                  className="p-2 hover:bg-gray-100 list-none"
                  key={item.category}
                >
                  {item.category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobcategory;
