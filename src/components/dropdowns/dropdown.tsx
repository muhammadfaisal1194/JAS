import React, { useEffect, useRef } from "react";

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, setIsOpen }) => {
  const catMenu = useRef<HTMLDivElement | null>(null);

  const closeOpenMenus = (e: MouseEvent) => {
    if (
      isOpen &&
      catMenu.current &&
      !catMenu.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);

    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div ref={catMenu} className="relative">
        <input
          type="text"
          className="gap-4 w-full border px-2 rounded-md border-gray-400 p-3 bg-white font-medium text-sm inline-flex items-center"
          onClick={toggleDropdown}
          placeholder="Education"
        />

        {isOpen && (
          <div className="absolute mt-2 w-full z-10 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="relative p-2 w-full text-sm grid gap-1">
              <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                Graduated <p className="text-gray-500">16+</p>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                intermediate <p className="text-gray-500">11 to 12</p>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                Middle Education <p className="text-gray-500">9 to 10</p>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                Secondary Education <p className="text-gray-500">6 to 8</p>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                Primary Education <p className="text-gray-500">1 to 5</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
