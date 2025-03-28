'use client'

import { ArrowLeftIcon, ArrowRightIcon, generatePagination } from '@/app/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const ListOfPages = ({ numberOfPages }) => {
  
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') || 1;
  const pathname = usePathname();
  const totalPages = generatePagination({ numberOfPages, currentPage: parseInt(currentPage) });

  const createPageURL = ({ page }) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', page);

    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className='w-full flex items-center justify-center mt-6 gap-2'>
      <Link 
        href={createPageURL({ page: parseInt(currentPage) - 1 })}
        className={`border px-2 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out duration-200 ${parseInt(currentPage) !== 1 ? 'visible' : 'invisible'}`} 
      >
        <ArrowLeftIcon />
      </Link>

      <div className='flex items-center rounded-md'>
        {
          totalPages.map((page, index) => (
            <Link 
              key={index} 
              href={createPageURL({ page })} 
              className={`py-1 px-3 ${parseInt(currentPage) === page ? 'bg-neutral-900 text-white' : 'bg-slate-200 text-neutral-900 hover:bg-slate-300 transition-all ease-in-out duration-200'} font-bold first-of-type:rounded-l-md last-of-type:rounded-r-md border-r border-slate-300 last-of-type:border-none ${page === '...' && 'pointer-events-none'}`}
            >
              {page}
            </Link>
          ))
        }
      </div>

      <Link 
        href={createPageURL({ page: parseInt(currentPage) + 1 })}
        className={`border px-2 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out duration-200 
        ${
          (parseInt(currentPage) !== numberOfPages) && (numberOfPages !== 0) 
            ? 'visible' 
            : 'invisible'
        }`} 
      >
        <ArrowRightIcon />
      </Link>
    </div>
  )
}

export default ListOfPages;