'use client';

import { useEffect, useRef, useState } from "react";
import { ArrowDownIcon, FilterIcon, getDefaultFilter } from "../lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Filter = ({ options, type }) => {
  const [selected, setSelected] = useState (getDefaultFilter({ type }));
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter(); 
  
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

  // Set the category filter when the user is coming from the budgets page
  useEffect(() => {
    if (type != 'category') return;

    const params = new URLSearchParams(searchParams);

    if(!params.get('category')) return;
    
    const selectedOption = options.find(option => option.value === params.get('category'));
    
    setSelected({ label: selectedOption.label, value: selectedOption.value });
  }, []);

  const handleClick = ({ option }) => {
    const params = new URLSearchParams(searchParams);

    /* Go back to the first page when the user apply the category filter */
    if(type === 'category'){
      params.set('page', 1);
    }
    
    if(option.value !== 'all' && option.value !== 'latest') {
      params.set(type, option.value);
    } else {
      params.delete(type);
    }

    replace(`${pathname}?${params.toString()}`);

    setSelected({ label: option.label, value: option.value });
    
    setIsOpen(false);
  }

  return (
    <div ref={selectRef} className="relative w-full cursor-pointer">
      <input type="hidden" name='filter' id='filter' />
      {/* Show the list and the option selected */}
      <div
        className="bg-white p-2 border border-gray-300 rounded-lg md:flex md:justify-between md:items-center hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected.label}</span>
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
        <ul className={`absolute w-40 md:w-full right-0 top-7 md:top-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 ${options.length > 7 ? 'h-56 overflow-y-scroll' : ''}`}>
          {type === 'category' && (            
            <li 
              className="p-2 hover:bg-gray-200 flex items-center gap-2"
              onClick={() => handleClick({ option: { label: 'All Transactions', value: 'all' } })}
            >
              All Transactions
            </li>
          )}

          {options.map((option) => (
            <li
              key={option.value}
              className="p-2 hover:bg-gray-200 flex items-center gap-2"
              onClick={() => handleClick({ option })}
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