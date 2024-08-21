import React, { useEffect, useRef } from "react";

interface DropdownProps {
  isOpen2: boolean;
  setIsOpen2: React.Dispatch<React.SetStateAction<boolean>>;
}
const Ganderdropdown: React.FC<DropdownProps> = ({ isOpen2, setIsOpen2 }) => {
  const Menu = useRef<HTMLDivElement | null>(null);

  const closeOpenMenus3 = (e: MouseEvent) => {
    if (isOpen2 && Menu.current && !Menu.current.contains(e.target as Node)) {
      setIsOpen2(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus3);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus3);
    };
  }, [isOpen2]);
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div>
      <div ref={Menu} className="relative">
        <button
          type="button"
          className="gap-4 w-full border px-2 rounded-md border-gray-400 p-3 text-gray-400 bg-white font-medium text-sm inline-flex items-center"
          onClick={toggleDropdown2}
        >
          Select...
        </button>

        {isOpen2 && (
          <div className="absolute z-10 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="relative p-2 w-full text-sm grid gap-1">
              <li className="p-2 hover:bg-gray-100">Male</li>
              <li className="p-2 hover:bg-gray-100">Female</li>
              <li className="p-2 hover:bg-gray-100">Other</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ganderdropdown;
