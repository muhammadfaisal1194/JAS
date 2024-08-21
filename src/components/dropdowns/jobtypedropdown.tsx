import React, { useEffect, useRef, useState } from "react";
import Jobrole from "@/data/jobrole.json";

interface JobtypeProps {
  jobtype: boolean;
  setJobtype: React.Dispatch<React.SetStateAction<boolean>>;
}

const Jobtype: React.FC<JobtypeProps> = ({ jobtype, setJobtype }) => {
  const catjobtype = useRef<HTMLDivElement | null>(null);

  const closeOpenMenus2 = (e: MouseEvent) => {
    if (
      jobtype &&
      catjobtype.current &&
      !catjobtype.current.contains(e.target as Node)
    ) {
      setJobtype(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus2);

    return () => {
      document.removeEventListener("mousedown", closeOpenMenus2);
    };
  }, [jobtype]);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  console.log(value);
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const toggleDropdown2 = () => {
    setJobtype(!jobtype);
  };
  const filteredCategories = Jobrole.filter((role) => {
    const abc = role.role === value;
    return abc;
  });
  // console.log(abc);
  console.log(filteredCategories);
  return (
    <div>
      <div ref={catjobtype} className="relative">
        <input
          type="text"
          className="gap-4 border w-full px-2 rounded-md border-gray-400 p-3 bg-white font-medium text-sm inline-flex items-center"
          onClick={toggleDropdown2}
          value={value}
          onChange={handleChange}
          placeholder="Job category"
        />

        {jobtype && (
          <div className="absolute mt-2 h-80 overflow-auto z-10 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="relative p-2 w-full text-sm grid gap-1">
              {Jobrole.map((item) => (
                <li className="p-2 hover:bg-gray-100 list-none" key={item.role}>
                  {item.role}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobtype;
