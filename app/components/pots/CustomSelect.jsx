import { ArrowDownIcon, themes } from '@/app/lib/utils';
import { useEffect, useRef, useState } from 'react'

const CustomSelect = () => {
  const [selected, setSelected] = useState("Select a theme");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Close the custom select when is clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative w-full cursor-pointer">
      {/* Show the list and the option selected */}
      <div
        className="bg-gray-100 py-1 px-2 border border-gray-300 rounded-lg flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <ArrowDownIcon />
      </div>

      {/* All the options */}
      {isOpen && (
        <ul className="absolute w-full bottom-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
          {themes.map((option) => (
            <li
              key={option.nameColor}
              className="rounded-lg py-1 px-2 hover:bg-gray-200 flex items-center gap-2 "
              onClick={() => {
                setSelected(option.nameColor);
                setIsOpen(false);
              }}
            >
              <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: option.color }}/>

              {option.nameColor}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;