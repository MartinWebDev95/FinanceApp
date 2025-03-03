import { ArrowDownIcon } from '@/app/lib/utils';
import { useEffect, useRef, useState } from 'react'

const CustomSelect = ({ data, defaultValue, placeholder }) => {
  const [selected, setSelected] = useState (
    data.find(option => option.value === defaultValue) || { label: placeholder, value: '' }
  );
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
    <div ref={selectRef} className="relative w-full cursor-pointer mt-1">
      <input type="hidden" name='theme' id='theme' defaultValue={selected.value} />

      {/* Show the list and the option selected */}
      <div
        className="bg-gray-100 py-1 px-2 border border-gray-300 rounded-lg flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='flex items-center gap-2'>
          {selected.value && (
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selected.value }}/>
          )}

          <span>{selected.label}</span>
        </p>

        <ArrowDownIcon />
      </div>

      {/* All the options */}
      {isOpen && (
        <ul className="absolute w-full bottom-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
          {data.map((option) => (
            <li
              key={option.value}
              className="rounded-lg py-1 px-2 hover:bg-gray-200 flex items-center gap-2 "
              onClick={() => {
                setSelected({label: option.label, value: option.value});
                setIsOpen(false);
              }}
            >
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: option.value }}/>

              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;