'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    if(e.target.value){
      params.set('search', e.target.value);
    }else{
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input 
      type="text" 
      placeholder={placeholder}
      defaultValue={searchParams.get('search')?.toString()}
      onChange={handleSearch} 
      className="border border-gray-400 rounded-md p-2 w-full" 
    />
  )
}

export default Search;