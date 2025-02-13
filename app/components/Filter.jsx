'use client';

import { useEffect, useRef, useState } from "react";
import { ArrowDownIcon, FilterIcon } from "../lib/utils";

const Filter = ({ options }) => {
  const [selected, setSelected] = useState(options[0].label);
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
        className="bg-white p-2 border border-gray-300 rounded-lg md:flex md:justify-between md:items-center hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <ArrowDownIcon />
      </div>

      {/* Icon for mobile */}
      <div
        className="md:hidden block"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FilterIcon />
      </div>      

      {/* All the options */}
      {isOpen && (
        <ul className="absolute w-40 md:w-full right-0 top-7 md:top-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
          {options.map((option) => (
            <li
              key={option.value}
              className="rounded-lg p-2 hover:bg-gray-200 flex items-center gap-2 "
              onClick={() => {
                setSelected(option.label);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;