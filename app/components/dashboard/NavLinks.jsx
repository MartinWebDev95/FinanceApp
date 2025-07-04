import { getNavLinks } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = ({ isMinimize }) => {

  const pathname = usePathname();

  return (
    <nav className={`${isMinimize ? 'lg:w-14' : 'lg:w-52'} w-full flex flex-row justify-evenly lg:flex-col lg:transition-all lg:duration-300 lg:ease-in-out lg:overflow-hidden`}>
      {getNavLinks().map((link) => (
        <Link 
          key={link.name} 
          href={link.href} 
          className={`relative whitespace-nowrap group flex flex-col lg:flex-row items-center gap-2 py-4 md:py-3 px-5 md:px-6 lg:py-5 lg:px-4 transition-all ease-in-out duration-200 ${isMinimize ? 'lg:rounded-none' : 'lg:rounded-r-lg'} ${pathname === link.href ? 'bg-white text-black after:block after:absolute after:left-0 lg:after:top-0 after:bottom-0 after:bg-emerald-700 lg:after:w-1 after:w-full lg:after:h-full after:h-1' : 'bg-transparent text-gray-400 hover:text-white'}`}
        >
          <div className={`${pathname === link.href ? 'text-emerald-700' : 'text-gray-400 group-hover:text-white transition-all ease-in-out duration-200'}`}>
            {link.icon} 
          </div>

          <span className={`${isMinimize ? 'lg:opacity-0' : 'lg:opacity-100'} hidden md:block text-sm lg:text-base lg:transition-opacity lg:duration-150 lg:ease-linear`}>{link.name}</span>
        </Link>
      ))}
    </nav>
  )
}

export default NavLinks