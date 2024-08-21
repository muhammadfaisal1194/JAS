import React, { useEffect, useRef } from "react";

interface JoblevelProps {
  joblevel: boolean;
  setJoblevel: React.Dispatch<React.SetStateAction<boolean>>;
}
const Joblevel: React.FC<JoblevelProps> = ({ joblevel, setJoblevel }) => {
  const Catjoblevel = useRef<HTMLDivElement | null>(null);

  const closeJoblevel = (e: MouseEvent) => {
    if (
      joblevel &&
      Catjoblevel.current &&
      !Catjoblevel.current.contains(e.target as Node)
    ) {
      setJoblevel(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeJoblevel);
    return () => {
      document.removeEventListener("mousedown", closeJoblevel);
    };
  }, [joblevel]);
  const togglesJoblevel = () => {
    setJoblevel(!joblevel);
  };
  return (
    <div>
      <div ref={Catjoblevel} className="relative">
        <button
          type="button"
          className="gap-4 w-full border px-2 rounded-md border-gray-400 p-3 text-gray-400 bg-white font-medium text-sm inline-flex items-center"
          onClick={togglesJoblevel}
        >
          Select...
        </button>

        {joblevel && (
          <div className="absolute z-10 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="relative p-2 w-full text-sm grid gap-1">
              <li className="p-2 hover:bg-gray-100">Entry-level</li>
              <li className="p-2 hover:bg-gray-100">Intermediate</li>
              <li className="p-2 hover:bg-gray-100">Expert</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Joblevel;
