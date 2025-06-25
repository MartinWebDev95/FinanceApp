'use client'

import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { ArrowIcon, LogoFull, LogoMinimize } from '@/app/lib/utils';

const Sidenav = () => {

  const [isMinimize, setIsMinimize] = useState(false);

  return (
    <aside className={`${isMinimize ? 'lg:w-14' : 'lg:w-72'} w-full bg-neutral-900 text-gray-400 h-fit lg:h-screen rounded-none lg:rounded-r-lg flex flex-col justify-between items-start transition-all ease-in-out duration-300 shadow-xl order-2 lg:order-1 font-bold sticky bottom-0 left-0 lg:top-0 z-30 overflow-hidden`}>
      <div className='w-full'>
        <div className='my-8 pl-4 hidden lg:block'>
          {isMinimize ? <LogoMinimize /> : <LogoFull />}
        </div>

        <NavLinks isMinimize={isMinimize} />
      </div>


      <button 
        type='button' 
        className='my-8 pl-4 lg:flex items-center gap-2 hidden' 
        onClick={() => setIsMinimize(!isMinimize)}
      >
        <ArrowIcon isMinimize={isMinimize} />

        <span className={`${isMinimize ? 'opacity-0' : 'opacity-100'} transition-all duration-150 ease-linear whitespace-nowrap`}>Minimize Menu</span>
      </button>
    </aside>
  )
}

export default Sidenav